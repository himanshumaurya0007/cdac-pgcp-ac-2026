package com.himanshumaurya0007.test;

import com.himanshumaurya0007.model.Circle;
import com.himanshumaurya0007.model.Rectangle;
import com.himanshumaurya0007.model.Shape;
import com.himanshumaurya0007.model.Triangle;

import java.util.Scanner;

public class TestRunTimePolymorphism {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Shape s = null;

        int choice;

        do {
            System.out.print("\n------- Menu Options -------");

            System.out.print("\nTo create objects with default constructor (No-arg constructor); use following menu options: ");
            System.out.print("\n1. Triangle");
            System.out.print("\n2. Circle");
            System.out.print("\n3. Rectangle");

            System.out.print("\n\nTo create objects with parameterised constructor; use following menu options: ");
            System.out.print("\n4. Triangle");
            System.out.print("\n5. Circle");
            System.out.print("\n6. Rectangle");

            System.out.println("\n\n7. Exit");

            System.out.print("\nEnter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> {
                    System.out.println();
                    s = new Triangle();

//                    System.out.println(s);
                }
                case 2 -> {
                    System.out.println();
                    s = new Circle();

//                    System.out.println(s);
                }
                case 3 -> {
                    System.out.println();
                    s = new Rectangle();

//                    System.out.println(s);
                }
                case 4 -> {
                    sc.nextLine();
                    System.out.print("\nEnter value of color: ");
                    String c = sc.nextLine();

                    System.out.print("Enter value of side1: ");
                    float s1 = sc.nextFloat();

                    System.out.print("Enter value of side2: ");
                    float s2 = sc.nextFloat();

                    System.out.print("Enter value of base: ");
                    float b = sc.nextFloat();

                    System.out.print("Enter value of height: ");
                    float h = sc.nextFloat();

                    System.out.println();
                    s = new Triangle(c, s1, s2, b, h);

//                    System.out.println(s);
                }
                case 5 -> {
                    sc.nextLine();
                    System.out.print("\nEnter value of color: ");
                    String c = sc.nextLine();

                    System.out.print("Enter value of radius: ");
                    float r = sc.nextFloat();

                    System.out.println();
                    s = new Circle(c, r);
//                    System.out.println(s);
                }
                case 6 -> {
                    sc.nextLine();
                    System.out.print("\nEnter value of color: ");
                    String c = sc.nextLine();

                    System.out.print("Enter value of length: ");
                    float l = sc.nextFloat();

                    System.out.print("Enter value of breadth: ");
                    float b = sc.nextFloat();

                    System.out.println();
                    s = new Rectangle(c, l, b);
//                    System.out.println(s);
                }
                case 7 -> {
                    System.out.println("\nThank you for using our services.\nPlease, visit again...");
                }
                default -> {
                    System.out.println("\nInvalid input.\nPlease, try again");
                }
            }

            if (choice >= 7) {
                continue;
            } else {
                if (s != null) {
                    System.out.println(s);
                    System.out.println("Area: " + s.calculateArea());
                    System.out.println("Perimeter/Circumference: " + s.calculatePerimeter());
                }
            }
        } while (choice != 7);
    }
}
