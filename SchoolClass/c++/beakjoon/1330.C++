//두 수 비교하기

#include <iostream>

int main(){
    int a,b;
    std :: cin >> a >> b;
    if(a>b)  std :: cout << ">";
    else if(a<b)  std :: cout << "<";
    else std :: cout << "==";
   
    return 0;
}

//삼항으로 풀어봤는데 왜 안되는건지 모르겠다.
// '=='이 좀 수상하다.
// #include <iostream>

// int main(){
//     int a,b;
//     std :: cin >> a >> b;
//     char com = (a > b) ? '>' : (a == b) ? '==' : '<';
//     std :: cout << com;
//     return 0;
// }