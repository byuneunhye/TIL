#include <stdio.h>
int main() {
	char a[101];
	int i;
	fgets(a,101,stdin); //a에 101개 표준입출력 함
	for(i=0; a[i]!='\0'; i++) 
	{
		if(a[i]==' ') continue; //a[i]가 ' '이면 명령어 실행 없음
		else printf("%c",a[i]);
		
			
	}
	
	
	return 0;
}
