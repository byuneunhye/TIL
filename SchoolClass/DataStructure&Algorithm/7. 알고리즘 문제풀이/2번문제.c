//a부터 b까지 합을 수식과 함께 출력
#include <stdio.h>
int main() {
	int a,b,sum=0;
	scanf("%d %d",&a,&b); //a부터 b까지
	for(int i=a; i<=b; i++) //a부터 b까지
	{
		printf("%d ",i);
		
		if(i!=b) printf("+ "); //마지막 더하는 값 뒤에는 +연산자가 오면 안 돼서 필요한 조건식
		sum=sum+i; //차곡차곡 더한 값
		
	}
	printf("= %d",sum); //최종 더한 값 출력
	return 0;
}


