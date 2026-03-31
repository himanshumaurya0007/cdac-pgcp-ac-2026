package com.himanshumaurya0007.student;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;
import java.util.stream.Stream;

public class StudentArrayServices {

    public static void addStudents(Student[] studentArray) {
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < studentArray.length; i++) {
            System.out.println("\n------- Enter Details Here of Student " + i + ": -------");
            System.out.print("\nEnter ID: ");
            int studentId = sc.nextInt();

            sc.nextLine();

            System.out.print("Enter Name: ");
            String studentName = sc.nextLine();

            System.out.print("\nEnter Mark 1: ");
            float studentMark1 = sc.nextFloat();

            System.out.print("Enter Mark 2: ");
            float studentMark2 = sc.nextFloat();

            System.out.print("Enter Mark 3: ");
            float studentMark3 = sc.nextFloat();

            System.out.print("\nEnter date (In format - dd/MM/yyyy)): ");
            String date = sc.next();

            Date joiningDate = null;
            SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
            try {
                joiningDate = sdf.parse(date);
            } catch (ParseException e) {
                e.printStackTrace();
//                throw new RuntimeException(e);
            }
            studentArray[i] = new Student(studentId, studentName, studentMark1, studentMark2, studentMark3, joiningDate);
        }
    }

    public static void displayStudents(Student[] studentArray) {
        System.out.print("\n\nPrinting using for-each loop:");
        for (Student s : studentArray) {
            System.out.println(s);
        }

        System.out.print("\nPrinting using Stream with lambda expression:");
        Stream.of(studentArray).forEach(s1 -> System.out.println(s1));

        System.out.print("\nPrinting using Stream with method reference:");
        Stream.of(studentArray).forEach(System.out::println);
    }
}
