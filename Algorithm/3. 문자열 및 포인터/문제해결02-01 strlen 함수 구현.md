# strlen  함수 구현


- strlen : 문자열 길이 구함

- 문자'1'을 숫자 1로 변형하는 법 : ``문자변수 - '0'``

    - ex) ``'1' - '0'``

    - 문자 0이 아스키코드값으로 ``48``임.    
    =>문자 1은 아스키코드값으로 ``49``임. ``49-48=1``이 나옴
    

<br>

```C
#include <stdio.h>
int myStrlen( char* str );
int myStrlen2( char* str );

int main() {
	char s[100];
	// scanf("%s", s );
	fgets(s, 100, stdin); // 마지막에 \n\0 같이 저장, scanf로 받을 때보다 길이가 하나 추가됨
	
	printf("%d\n", myStrlen(s) ); // 문자 길이 
	printf("%d\n", myStrlen2(s)); // 문자 중 digit의 개수
	printf("%d\n", myStrlen3(s)); // 공백 제외 길이
	printf("%d\n", myStrlen4(s, 't')); // 문자 중 t의 개수
	
	return 0;
	
}

int myStrlen( char* str ){ // char str[]
	int count = 0;
	for(int i=0; *(str+i)!='\0'; i++) { // str[i]
		count++;
	}
	//  문자 길이 구하는 코드(NULL 포함)
	return count-1;
}

int myStrlen2( char* str ){ // char str[]
	int count = 0;
	for(int i=0; *(str+i)!='\0'; i++){ // str[i]
		if(*(str+i) >= '0' && *(str+i) <= '9') count++;
		// 문자 중 digit의 개수 구하는 코드
	}
	return count;
}

int myStrlen3(char* str){ // char str[]
	int count = 0;
	for(int i=0; *(str+i)!='\0'; i++){ // str[i]
		if(*(str+i) != ' '){ // str[i]
			count++;
		}
		// 공백을 제외한 길이를 구하는 코드
	}
	return count-1;
}

int myStrlen4(char* str){ // char str[]
	int count = 0;
	for(int i=0; *(str+i)!='\0'; i++){ // str[i]
		if(*(str+i) == 't'){ // str[i]
			count++;
		}
		// 문자 중 t의 개수를 구하는 코드
	}
	return count;
}
```