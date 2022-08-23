public class Test {
    public static void main(String[] args)
    { 
    	int value3 = 0;
        switch(value3)  //switch: 여러가지 경우의 수 중 사용자가 원하는 경우를 출력하는 문법
        {
        case 1:
            for(int k=0; k<10; k++) {
                System.out.print(k+ " ");
            }
            break; //조건문을 빠져나감, switch문 쓸 때 break 꼭 필요
        case 2:
            for(int k=10; k>0; k--) {
                System.out.print(k+ " ");
            }
            break;
        default: //value3이 1도 아니고 2도아니므로 default 값 실행
        	System.out.print("디폴트값");
        }
    }
}

//실행결과 : 디폴트값