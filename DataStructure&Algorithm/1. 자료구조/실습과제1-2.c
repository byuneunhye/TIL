#include <stdio.h>

int main()
{
    int n,num[100]={0, };
    scanf("%d",&n);
    for(int i=1; i<=n; i++)
    {
        scanf("%d",&num[i]);
        printf("%d: ",i);
        for(int j=1; j<=n; j++)
        {
            //scanf("%d",&num[j]);
            printf("%d %d\n",num[i],num[j]); //배열 무슨 값인지 확인용 출력
          printf(num[i]>num[j]?">":num[i]<num[j]?"<":"="); //비교 하는거 

        }
        printf("\n");
    }



    return 0;
}
