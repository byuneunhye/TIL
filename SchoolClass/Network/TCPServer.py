from socket import * # 소켓 라이브러리 안에서 가져올거임

s_ip = 'localhost' #자기 자신을 표현하는거 27.0.0.1
s_port = 9999
s_addr = (s_ip, s_port) #ip랑 port랑 합친게 주소

s_sock = socket(AF_INET, SOCK_STREAM) #AF_INET : ip버전 4 

s_sock.bind(s_addr)

s_sock.listen(2)

client, c_addr = s_sock.accept()
print(c_addr, 'is connected')

data1 = 'Tank you for connecting'
client.send(data1.encode('utf-8'))
data2 = 'Received data from client'
print(data2, client.recv(1024).decode('utf-8')) #한번 받을 때 1024byte 씩 받음

client.close()
s_sock.close()

# import socket #socket은 표준 라이브러리


