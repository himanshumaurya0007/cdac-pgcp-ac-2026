public class CmdLineArgsGreeting {
    public static void main(String[] args) {
        System.out.println("Length: " + args.length);

        System.out.println();
        for (int i = 0; i < args.length; i++) {
            System.out.println("Hello, " + args[i]);
        }
    }
}
