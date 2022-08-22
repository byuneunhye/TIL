public class Test {
    public static void main(String[] args)
    {
    	        int value1 = (3>5)? 6: 9; //3>5임? 맞으면 6, 아니면 9 저장
    	        System.out.println(value1); //9 출력, 3>5 아니기 때문
    	        
    	        int value2 = (5>3)? 10: 20; //5>3임? 맞으면 10, 아니면 20 저장
    	        System.out.println(value2); //10출력
    	        
    	        int value3 = 3;
    	        System.out.println((value3%2==0)?"짝수":"홀수"); //3%2==0이 아니므로 홀수 출력
    	        		
    	        if(value3%2==0) {
    	            System.out.println("짝수");
    	        } else {
    	            System.out.println("홀수"); //3%2==0이 아니므로 홀수 출력
    	        }	
    }
}

//실행결과 : 9 10 홀수 홀수