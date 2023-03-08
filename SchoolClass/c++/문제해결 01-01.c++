// <문제1> 사용자로부터 총 5개의 정수를 입력 받아서, 그 합을 출력하는 프로그램을 작성하여 제출하시오.
#include <iostream>

int main()
{
    int a,b,c,d,e;
   
    std::cin>>a>>b>>c>>d>>e;
   
    std::cout<<(a+b+c+d+e);
    
    return 0;
}



// <문제 2> 사용자로부터 이름과 전화번호를 문자열 형태로 입력 받아서, 입력 받은 데이터를 그대로 출력하는 프로그램을 작성하여 제출하시오.
#include <iostream>

int main()
{
    char name[11];
    char num[55];
    std :: cin >> name >> num;
    std :: cout << name << num;
    return 0;
}




// <문제 3> 숫자를 하나 입력 받아서 그 숫자에 해당하는 구구단을 출력하는 프로그램을 작성하여 제출하시오.( 예를 들어서 사용자가 5를 입력한다면 구구단에서 5단을 출력해야 한다.)
#include <iostream>

int main()
{
    int a;
    std :: cin >> a;
    int result;
    for(int i=1; i<10; i++){
        std :: cout << a << " x "  << i << "=" << a*i << "\n";
    }
    return 0;
}


// c++을 쌩판 처음 접했다. 다른 친구들은 이미 다들 할 줄 아는 것 같았다. C만 써 봐서 std랑 cin, cout 이런게 다 어색하다. 차근차근 밟고 올라가야겠다.











