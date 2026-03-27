public class CmdLineArgsCalculator {
    public static void main(String[] args) {

        int a = Integer.parseInt(args[1]);
        int b = Integer.parseInt(args[2]);

        System.out.println("You enetered: " + args[0]);
        System.out.println("You enetered: " + args[1]);
        System.out.println("You enetered: " + args[2]);
        System.out.println();

        switch (args[0]) {
            case "+":
                System.out.println("Addition: " + (a + b));
                break;

            case "-":
                System.out.println("Substraction: " + (a - b));
                break;

            case "x":
                System.out.println("Multiplication: " + (a * b));
                break;

            case "/":
                System.out.println("Division: " + (a / b));
                break;

            case "%":
                System.out.println("Modulus: " + (a % b));
                break;

            default:
                System.out.println("Invalid operator!");
                break;
        }
    }
}