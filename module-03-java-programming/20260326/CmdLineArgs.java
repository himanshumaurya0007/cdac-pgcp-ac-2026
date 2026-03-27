public class CmdLineArgs {
    public static void main(String[] args) {

        System.out.println("Length: " + args.length);

        for (int i = 0; i < args.length; i++) {
            System.out.println("Your entered args is " + args[i]);
        }
    }
}
