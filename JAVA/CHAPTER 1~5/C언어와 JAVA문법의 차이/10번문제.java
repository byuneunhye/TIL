public class Test {
    public static void main(String[] args)
    {
      int count=0;
      for(int i=1; i<=10; i++)  //i=1~10
      {
         for(int j=1; j<=10; j++) //j=1~4
         {
            if(j==5) break;
            else count++;
         }
      }
      System.out.println(count); //10 * 4 = 40
    }
}

//실행결과 : 40