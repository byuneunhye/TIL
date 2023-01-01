#include <stdio.h>

void hanoi(int n,char a, char b, char c) //함수 시작

{

    if(n==1) //n이 1이면 출력

    {

        printf("%d : %c -> %c\n",n,a,c);

    }

    else //n이 1이 아니면

    {

        hanoi(n-1,a,c,b); //hanoi함수 인수 세팅 -> 또 호출 -> 호출 ...

        printf("%d : %c -> %c\n",n,a,c); //호출 한거 끝 내고 돌아와서 실행

        hanoi(n-1,b,a,c); //호출 한거 안에서 또 호출

    }

}

int main() //main 부터 실행

{

    int n;

    scanf("%d",&n);

    hanoi(n,'A','B','C'); //hanoi함수 호출

    return 0;

}
