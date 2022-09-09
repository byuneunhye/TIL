# return

- ``return``: 함수를 호출 한 곳으로 반환

- ``main 함수``에서 return 0 하면 ``운영체제로`` 0을 반환(main함수를 호출한 루틴이 컴퓨터 os임)



```C
#include <stdio.h>

int foo(void);


int main(void) {

  printf("%d\n", foo());

  return 0;
}


int foo(void) {
  return 1234;
}
```
\- 실행결과 : 1234 출력

=> main 함수 -> printf에서 foo 함수 ``호출`` -> foo함수에서 1234를 ``자신을 호출한 함수로 반환`` -> printf 1234를 실행 -> main 함수 속 return 0은 운영체제로 0을 반환


***
>참고:(http://mwultong.blogspot.com/2006/12/c-return-0-return-1-return-1.html)    
>참고: (http://mwultong.blogspot.com/2006/07/c-return-return-0.html)



