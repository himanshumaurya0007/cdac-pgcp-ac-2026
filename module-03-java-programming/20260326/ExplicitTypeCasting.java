public abstract class ExplicitTypeCasting {
    public static void main(String[] args) {
        short y = 100;
        // byte x = y;
        byte x = (byte) y;

        System.out.println(y);
        System.out.println(x);

        long q = 12345678;
        // int p = q;
        int p = (int) q;

        System.out.println(q);
        System.out.println(p);
    }
}
