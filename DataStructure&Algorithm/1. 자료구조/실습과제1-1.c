#include <stdio.h>
int main() {

	int n,m,num,cnt=1,a[1001]={0, };

	scanf("%d",&n);             //배열 몇번방 까지 받을지 입력
	for(int i=1; i<=n; i++)
	{
		scanf("%d",&a[i]);      //배열 입력
	}

	scanf("%d",&m);            // 비교할 숫자 몇 개 받을지 입력
	for (int i=1; i<=m; i++)
	{
		scanf("%d",&num);    //비교할 숫자 입력
		//printf("%d ",num);      //비교할 숫자 뭔지 확인용 출력
		for(int j=1; j <=n; j++)
        {
            //printf("%d ",a[j]);     //비교 당한 배열의 값 확인용 출력
            if(a[j]==num) { cnt=1;  } //비교할 숫자와 비교당한 배열의 숫자가 같으면 프린트 1을 하라
		else { cnt=0; }                   //아니면 0을 출력 하라



        }
printf("%d ",cnt);

	}


	return 0;
}