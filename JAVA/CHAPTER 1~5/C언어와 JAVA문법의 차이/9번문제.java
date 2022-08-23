public class Test {
    public static void main(String[] args)
    {
    	int count;
    	count=0;
		for(int i=1; i<=10; i++) 
		{	
			if(i==5) 
			{
				continue; //증감식으로 이동(i++로 감) ,i가 5일때만 실행 안함
			}
			count++;			//총 9번 실행
		}
		System.out.println(count);	 //9 출력
		
    	count=0;
    	for(int i=1; i<=10; i++) 
    	{
    		if(i%2==1)
    		{
    			continue; //짝수일때만 실행 함
    		}
			count++;
	}
    	System.out.println(count); //5 출력
				
		count=0;
		for(int i=0; i<5; i++) 
		{
			for(int j=0; j<5; j++) 
			{
				if(j==3) 
				{
					continue; //j++로 이동
				}
				count++;
			}
		} 
		System.out.println(count);//20출력
    }
}

//실행결과 : 9 5 20