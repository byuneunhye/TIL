#include <stdio.h>
  char star[20];
  void f(int n) { //5
		if(n<1) return;// n이 0이면 종료, 아니면 계속 호출 (무한루프에 빠지지 않게 하기위한 재귀함수에서 젤 중요한 조건)
		f(n-1); //n이 1이 될때 까지 계속 호출 해 줌
		for(int i=1; i<=n; i++){
			printf("*");
		}
  	printf("\n");
		
	} 

 int main() {
    int n;
    scanf("%d", &n);
    f(n); //n=5
 }