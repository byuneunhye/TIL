public class Test 
{
public static void main (String[] args) 
{
	for(int i=0; i<10; i+=2) //맨마지막에 i<10까지 하고 끝 (조건에 만족하지 않을때 까지반복),6번실행
    {
        System.out.print(i + " ");//조건에 만족할때 까지 반복,8번실행
    }
    for(int i=0, j=0; i<10; i++, j++)//11번 실행
    {
        System.out.print(i + j +" "); //i+j는 값(0+0=0, 1+1=2 이런 식) ,10번 수행
    }
}
}

//실행결과 : 0 2 4 6 8 0 2 4 6 8 10 12 14 16 18
