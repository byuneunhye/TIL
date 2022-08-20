#include <stdio.h>

int main()
{
    char a[6]={'h', 'e' , 'l' , 'l' , 'o'  },input,arr;

    printf("찾고싶은 문자 : ");

    scanf("%c",&input);

    for(int i=0; i<5; i++)
    {
        if(a[i]==input)
             printf("%d번째\n",i);

    }



    return 0;
}
