package com.himanshumaurya0007.person;

public class MethodsOfStringClass {
    public static void main(String[] args) {

        String s1 = "The quick brown fox jumps over the lazy dog";
        String s2 = "the quick brown fox jumps over the lazy dog";
        String s3 = "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";

        System.out.println("s1.length(): " + s1.length());

        System.out.println();
        System.out.println("s1.substring(2): " + s1.substring(2));
        System.out.println("s1.substring(13, 31): " + s1.substring(13, 31));

        System.out.println();
        System.out.println("s1.charAt(18): " + s1.charAt(18));

        System.out.println();
        System.out.println("s1.toLowerCase(): " + s1.toLowerCase());
        System.out.println("s1.toUpperCase(): " + s1.toUpperCase());

        System.out.println();
        String[] words = s1.split(" ");

        System.out.println("s1.split(\" \").length: " + words.length);

        System.out.println("\nWords in the split array:");
        for (String word : words) {
            System.out.println(word);
        }

        System.out.println();
        System.out.println("String.join(\" : \", \"Himanshu\", \"Maurya\"): " +
                String.join(" : ", "Himanshu", "Maurya")
        );

        System.out.println();
        System.out.println("s1.equals(s2): " + s1.equals(s2));
        System.out.println("s1.equals(s3): " + s1.equals(s3));

        System.out.println();
        System.out.println("s1.compareTo(s2): " + s1.compareTo(s2));
        System.out.println("s1.compareTo(s3): " + s1.compareTo(s3));

        System.out.println();
        System.out.println("s1.contains(\"fox\"): " + s1.contains("fox"));

        System.out.println();
        System.out.println("s1.startsWith(\"The\"): " + s1.startsWith("The"));
        System.out.println("s1.endsWith(\"dog\"): " + s1.endsWith("dog"));

        System.out.println();
        System.out.println("s1.indexOf(\"o\"): " + s1.indexOf("o"));
        System.out.println("s1.lastIndexOf(\"o\"): " + s1.lastIndexOf("o"));

        System.out.println();
        System.out.println("s1.replace(\"fox\", \"cat\"): " + s1.replace("fox", "cat"));

        System.out.println();
        String s4 = "   Hello World   ";
        System.out.println("Before trim: \"" + s4 + "\"");
        System.out.println("After trim: \"" + s4.trim() + "\"");

        System.out.println();
        String emptyStr = "";
        String blankStr = "   ";
        System.out.println("emptyStr.isEmpty(): " + emptyStr.isEmpty());
        System.out.println("blankStr.isBlank(): " + blankStr.isBlank());

        System.out.println();
        System.out.println("s1.concat(\" !!!\"): " + s1.concat(" !!!"));

        System.out.println();
        int num = 100;
        String numStr = String.valueOf(num);
        System.out.println("String.valueOf(100): " + numStr);

        System.out.println();
        System.out.println("s1.matches(\".*fox.*\"): " + s1.matches(".*fox.*"));

        System.out.println();
        System.out.println("\"Hi \".repeat(3): " + "Hi ".repeat(3));

        System.out.println();
        char[] chars = s1.toCharArray();
        System.out.println("Characters in s1:");
        for (char c : chars) {
            System.out.print(c + " ");
        }

        System.out.println();
        System.out.println();
        String formatted = String.format("Name: %s | Marks: %.2f", "Himanshu", 95.678);
        System.out.println("Formatted String: " + formatted);
    }
}