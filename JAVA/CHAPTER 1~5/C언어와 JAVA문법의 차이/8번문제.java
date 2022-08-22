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
         for(int i=0; i<5; i++) 
         {
             for(int j=0; j<5; j++) 
             {
                 if(j==2) 
                 {
                     break;
                 }
                 count++;
             }
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
             }
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
 	   System.out.println(count);
    }
}