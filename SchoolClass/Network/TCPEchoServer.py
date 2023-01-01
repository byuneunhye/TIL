from socket import *

s_ip = 'localhost'
s_port = 12345
s_addr = (s_ip, s_port)

s_sock = (AF_INET, SOCK_STREAM) #ip버전 4 버전을 사용, (udp)포트번호는 tcp 프로토콜을 사용함
s_sock.setsockopt(SOL_SOCKET, SO_REUSEADDR, 1)

s_sock.bind(s_addr)
s_sock.listen(2)

client, c_addr = s_sock.accept()
print(c_addr, 'Now Connected')

data = 'dummy'

while len(data):
    data=client.recv(1024).decode('utf-8')

    if data == 'q' : #무한반복 쓸 때 탈출조건, if 씀
        print('\n수신종료')
        break

    print('수신된 Data : ',data)
    client.send(data.encode('utf-8'))

client.close()
s_sock.close()