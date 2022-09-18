#include <stdio.h>
#include <string.h>

int main()
{
    char str[50];
	  char c;
	  int i;
		int len=0;
		scanf("%s",str); //scanf에서 주소연산자 쓸 필요 없음. 배열이름이 주소이기때문.
		getchar(); //str이랑 c 사이 공백 받는거 
         // printf("찾고싶은 문자 : ");
        scanf("%c",&c);
        len=strlen(str);
        for(int i=0; str[i]!='\0'; i++) //str[i]!='\0'을 i<len 으로 써도 됨
        {
            if(str[i] == c)
                    {
                        printf("%d번째\n",i+1); //i+1인 이유는 배열이 0부터 시작이기 때문
                        break;
                    }
                

    }



    return 0;
}
