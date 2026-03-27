import java.util.Scanner;

public class FunctionalProgramming {
    public static int factorial(int number) {
        int factorial = 1;

        for (int i = 1; i <= number; i++) {
            factorial *= i;
        }
        return factorial;
    }

    public static void printTable(int num) {
        System.out.println("\nTable of " + num + " is as follows: ");
        for (int i = 1; i <= 10; i++) {
            System.out.println(num + " X " + i + " = " + (num * i));
        }
    }

    public void nonStaticFunction() {
        System.out.println("\nIn nonStaticFunction() function!");
        System.out.println("nonStaticFunction() function, EXECUTED SUCCESSFULLY!");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter number: ");
        int n = sc.nextInt();

        // Calling static function with class name.
        // Using class name is not mandatory, because both functions are in same class.
        int f = FunctionalProgramming.factorial(n);
        System.out.println("\nFactorial of " + n + " is " + f);

        // As static function is in the same class so, it can be called without creating
        // and using the object.
        printTable(n);

        // To access the non-static function, we have to create object and then we can
        // access it.
        FunctionalProgramming fp = new FunctionalProgramming();
        fp.nonStaticFunction();

        sc.close();
    }
}
