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

// continue : 그 때 돌고있는 코드 부분은 건너뛰고 다음 반복부터 돌겠다는거임. 한마디로 전체 반복 중에 특정조건을 만족하는 경우를 제외 함