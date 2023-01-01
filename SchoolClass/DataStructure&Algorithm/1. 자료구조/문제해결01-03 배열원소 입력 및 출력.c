#include <stdio.h>
int main() {
	int a[100],i,num,n=0;
	
	/*for(i=0; i<5; i++)
	{
		scanf("%d",&a[i]);
		getchar();
	}
	if(a[i]==0)
		{
			for(i=5; i>=0; i--)
			{
				print("%d",a[i]);
			}
		}
	*/
	 for(i=0; i<=100; i++)
	 {
		 scanf("%d",&num);
		 if(num==0)
		 {
			 n=i;
			 break;
		 }
		 else{
			 a[i]=num;
			 
		 }
		 
	 }
	for(i=n-1; i>=0; i--)
	{
		printf("%d ",a[i]);
	}
	
	return 0;
}
