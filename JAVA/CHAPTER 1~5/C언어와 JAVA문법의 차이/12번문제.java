public class Test {
    public static void main(String[] args)
    {
      int count=0;
      for(int i=1; i<=10; i++)
      {
         for(int j=1; j<=10; j++)
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