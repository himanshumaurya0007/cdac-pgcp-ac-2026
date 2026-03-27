public class SumOfNArgNumbers {
    public static void main(String[] args) {
        System.out.println("Length: " + args.length);

        int sum = 0;
        for (int i = 0; i < args.length; i++) {
            sum += Integer.parseInt(args[i]);
        }
        System.out.println("Sum is " + sum);
    }
}