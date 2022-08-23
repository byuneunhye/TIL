public class Test {
    public static void main(String[] args)
    {
      int count=0;
      for(int i=1; i<=10; i++) 
      {
         if(i%2==0) continue; // i=1,3,5,7,9
         for(int j=1; j<=10; j++) //j=1~4
         {
            if(j==5) break;
            else count++;
         }
      }
      System.out.println(count); //5*4=20
    }
}

//실행결과 : 20