public class Test {
    public static void main(String[] args)
    {
      int count=0;
      for(int i=1; i<=10; i++) // i=1~10
      {
         for(int j=1; j<=10; j++) //j=1
         {
            if(j%2==1) break;
            count++;
            for(int k=1; k<=10; k++)
            {
               if(k%2==0) continue;
               count++;
            }
         }
      }
      System.out.println(count);
    }
}

//실행결과 : 0