public class Test //클래스 이름 Test
{
    public static void main(String[] args)//입력받는거 , main 함수
    {
    	int a=10;
        int b=9;
        int c=8;
        int d=(a++)+(--b)+(c--); //10+8+8=26
        int e=(++a)+(b--)+(--c); //11+8+7=26
        System.out.println(d);
        System.out.println(e);
    }
}

//실행결과 : 26 26