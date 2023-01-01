//자연수 n의 진약수 합을 수식과 함께 출력
#include <stdio.h>
int main() {
	int n,m=0,sum=0; //m이 약수 저장하는 변수
	scanf("%d",&n);
	for(int i=1; i<n; i++) 
	{
		if(n%i==0) {m=i; printf("%d ",m);} //n나누기i 가 0이면 약수인 i를 m에 저장
		else continue; //n나누기i가 0이 아니면 건너뛰고 for문 계속 실행, continue 삼항에 쓰니까 안 되더라
		sum=sum+i; //합계 값 저장
		if(m!=n/2&&n%2==0) printf("+ "); //약수m이 n/2랑 같으면 진약수 중 젤 마지막꺼임, 합성수라서 n나누기 2가 0임
		else if(n%2!=0) break; // n나누기 2가 0이 아니면 소수, +연산자 출력 안 함
	}
	printf("= %d",sum);
	return 0;
}
