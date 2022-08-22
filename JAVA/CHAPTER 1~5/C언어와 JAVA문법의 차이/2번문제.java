public class Test {
    public static void main(String[] args)
    {
        System.out.println((5<=5) && (7>2)); //true && true => true
        System.out.println((5<=5) || (7>2)); // true || true = > true
        System.out.println((5<=5) ^ (7>2)); // true^true => false
        System.out.println((5<=5) && !(7>2)); // true && NOTtrue => false
        
        int value1 = 3;
        int value2 = 5;
        System.out.println(value1 & value2); // 2진수로 바꿔서 계산 함, 011 & 101 => 001 => 1
        System.out.println(value1 | value2); // 001 | 101 => 111 => 7
        System.out.println(value1 ^ value2); // 001 ^ 101 => 110 => 6
    }
}


//실행결과 : true true false false 1 7 6