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

/* 쌤 코드
#include <stdio.h>

int main()
{
    char alpha[6]={'h', 'e' , 'l' , 'l' , 'o'  };
	char c;
	int i;

    printf("찾고싶은 문자 : ");

    scanf("%c",&c);

    for(int i=0; alpha[i]!='\0'; i++)
    {
        if(alpha[i]==c)
             printf("%d번째\n",i+1);

    }



    return 0;
}
*/