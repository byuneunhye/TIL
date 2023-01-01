from socket import *

s_ip = 'localhost'
s_port = 12346
s_addr = (s_ip, s_port)

s_sock = socket(AF_INET, SOCK_DGRAM)
s_sock.bind(s_addr)
print('클라이언트 접속을 기다리는 중......\n')
s_sock.settimeout(10) #접속을 5초간 기다림

data, c_addr = s_sock.recvfrom(1024)
print('수신 된 클라이언트 위치 : ' , c_addr)
print('수신된 데이터는 ',data.decode('utf-8'))

s_sock.close()
