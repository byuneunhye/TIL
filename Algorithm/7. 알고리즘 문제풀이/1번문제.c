//n이 입력되면 1부터 n까지의 수 중 m의 배수 합 출력
#include <stdio.h>
int main() {
	int N,M,sum=0;
	scanf("%d %d",&N,&M); //n까지, m의 배수
	int p=1; //곱한 값 p 초기화
	for(int i=1; i<=N/M; i++) //i가 n/m 의 몫보다 작을 동안 실행 함.
	{
		p=M*i; //m의 배수를 p에 저장, m부터 i증가 하는거 차곡차곡 곱하는거임
		//printf("%d ",p); 
		sum=sum+p; // 배수들의 합 구하는거
		//printf("%d ",sum);
	}
	printf("%d",sum);
	return 0;
}
