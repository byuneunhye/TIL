public class Test {
    public static void main(String[] args)
    {
    	int count;
    	count=0;
    	 for(int i=0; i<10; i++) 
    	 {
             if(i==5) 
             {
                 break;
             }
             count++;
    	 }
         System.out.println(count);
 				
         count=0;
         for(int i=0; i<5; i++)  //i=0,1,2,3,4
         {
             for(int j=0; j<5; j++)  //j=0,1,2,3,4
             {
                 if(j==2) //j= 0,1일때만
                 {
                     break; //감싸고 있는 가장 가까운 반복문을 빠져나감
                 }
                 count++;
             } //10번 실행
         }
         System.out.println(count);
 				
         count=0;
         for(int i=0; i<5; i++) 
         {
        	 if(i==2) 
             {
                 break;
             }
             for(int j=0; j<5; j++) 
             {
                 count++;
             }//10번 실행
         }
         System.out.println(count);
 		
        count=0;
 		for(int i=0; i<5; i++) 
 		{
 			for(int j=0; j<5; j++)
 			{
 				if(j==2) 
 				{
 					i=100;
 					break;
 				}
 				count++;
 			}
 		}
 	   System.out.println(count); //2출력
    }
}

//실행결과 : 5 10 10 2