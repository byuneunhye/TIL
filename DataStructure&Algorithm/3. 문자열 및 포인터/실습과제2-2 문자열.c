#include <stdio.h>
#include <string.h>
int main() {
	char str[] = "123,456,789";
	int num = 0, i, len;
	
  // 문자열을 0번째부터 탐색  --1)
		  //if (문자가 ,이면) 세자리 숫자를 출력
		      //---1) 실행
		  //num값을 누적 계산
	scanf("%s",&str);
	for(i=0; str[i]!='\0'; i++){
		if(str[i]==','){
			printf("%d\n",num);
			num=0;
			continue;
		}
			num=num*10+str[i]-'0';
	}
	
	printf("%d\n", num);


	return 0;
}