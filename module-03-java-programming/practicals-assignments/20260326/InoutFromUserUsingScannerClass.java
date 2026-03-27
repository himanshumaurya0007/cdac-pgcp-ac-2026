import java.util.Scanner;

public class InoutFromUserUsingScannerClass {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter integer number: ");
        int n = sc.nextInt();
        System.out.println("You entered: " + n);

        System.out.print("\nEnter float number: ");
        float f = sc.nextFloat();
        System.out.println("You entered: " + f);

        System.out.print("\nEnter name: ");
        String name = sc.next();
        System.out.println("Your name is " + name);

        sc.nextLine();

        System.out.print("\nEnter address: ");
        String address = sc.nextLine();
        System.out.println("Your address is as follows: " + address);

        sc.close();
    }
}
