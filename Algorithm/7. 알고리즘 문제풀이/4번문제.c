//n명의 사람중 나이차이 가장 많이 나는 경우
#include <stdio.h>
//나이차이가 가장 많이나는건 ``최대값-최소값``을 하면 됨
int main() {
	int n,age,max=0,min=1000,result; //min값을 1000으로 초기화 해서 min에 age를 바로 대입할거임
	scanf("%d",&n); //사람 수 n입력
	for(int i=0; i<n; i++) 
	{
		scanf("%d",&age); 
		max=max>age?max:age; //최대값 저장
		min=min>age?age:min; //최소값 저장
		result=max-min; //최대값-최소값 한 값이 가장 큰 값임
	}
	printf("%d",result);
	return 0;
}
