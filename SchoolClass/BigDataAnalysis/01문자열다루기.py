#문자열을 입력받아 공백을 제거한 후 모음(aeiouAEOIU)을 빼고 출력
def cal(text): 
    sen = list(text) #입력받은 문자열을 리스트형태로 바꾸어 아래 for에서 사용함
    gap=''
    for i in range(len(sen)): #리스트의 길이만큼 변수 범위 설정
      if sen[i] not in ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'): #문장배열에 모음을 포함하고 있지 않다면
        gap += sen[i] #한 자, 한 자 문자를 붙여 문장을 만들어줌
    
    return gap


text=input() 

r = cal(text).replace(" ","") # 공백제거
print(r) 



#여러문장으로 구성된 복문을 입력받아 문장의 첫 자를 대문자로 바꾸고 한 줄에 한문장씩 출력
def make_sen(text):
  onesen = text.split(". ") # '. '을 기준으로 배열을 나눔
  cap = [s.capitalize() for s in onesen] #onesen문장의 첫 글자를 대문자로 바꾸고 cap에 저장
  enter = ".\n".join(cap) # '.\n' 으로 한줄에 한문장씩 cap문장을 출력
  print(enter)

text=input()
make_sen(text)