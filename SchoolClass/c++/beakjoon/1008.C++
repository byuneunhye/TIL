#include <iostream>

int main(){
    int a,b;
    std :: cin >> a >> b;
    std :: cout.precision(9); // 자리수 출력 개수 정하는 구문
    std :: cout << std :: fixed << (double)a/b;  //fixed를 추가하여 고정소수점 표현
    return 0; 
}

//소수점 이하의 자릿수를 다루고 싶다면 fixed, precision을 알아두자.
