public class Test {
    public static void main(String[] args)
    { 
    	int value3 = 0;
        switch(value3) {
        case 1:
            for(int k=0; k<10; k++) {
                System.out.print(k+ " ");
            }
            break;
        case 2:
            for(int k=10; k>0; k--) {
                System.out.print(k+ " ");
            }
            break;
        default:
        	System.out.print("디폴트값");
        }
    }
}