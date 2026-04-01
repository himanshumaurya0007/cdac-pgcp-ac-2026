package com.himanshumaurya0007.sms;

import java.util.Scanner;

public class TestStudentManagementSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int choice = 0;

        do {
            System.out.print("\n------- Menu Options -------");
            System.out.print("\n1. Add Student");
            System.out.print("\n2. Display All Student");
            System.out.print("\n3. Display Student by ID");
            System.out.print("\n4. Display Student by Name");
            System.out.print("\n5. Update Student by ID");
            System.out.print("\n6. Delete Student by ID");
            System.out.print("\n7. Exit");

            System.out.print("\n\nEnter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> {
                    boolean isAdded = StudentServices.addStudent();
                    System.out.println(isAdded ?
                            "\nStudent Add Successfully" : "\nStudent not added");
                }

                case 2 -> {
                    Student[] students = StudentServices.getAllStudents();

                    boolean isEmpty = true;

                    for (Student student : students) {
                        if (student != null) {
                            System.out.println(student);
                            isEmpty = false;
                        } else {
                            break;
                        }
                    }

                    if (isEmpty) {
                        System.out.println("\nNo students available");
                    }
                }

                case 3 -> {
                    System.out.print("Enter ID: ");
                    int id = sc.nextInt();

                    Student student = StudentServices.getStudentById(id);

                    if (student != null)
                        System.out.println(student);
                    else
                        System.out.println("\nStudent not found for ID " + id + "!");

                }
                case 4 -> {
                    sc.nextLine();
                    System.out.print("To Search, Enter Name: ");
                    String name = sc.nextLine();

                    Student[] students = StudentServices.getStudentsByName(name);

                    if (students != null) {
                        for (Student student : students) {
                            if (student != null)
                                System.out.println(student);
                            else
                                break;
                        }
                    } else {
                        System.out.println("\nNo student was found by name: " + name + "!");
                    }
                }

                case 5 -> {
                    System.out.print("Enter ID: ");
                    int id = sc.nextInt();

//                    Assuming marks are going to be updated
                    System.out.print("Enter New Marks 1: ");
                    float newMarks1 = sc.nextFloat();

                    System.out.print("Enter New Marks 2: ");
                    float newMarks2 = sc.nextFloat();

                    System.out.print("Enter New Marks 3: ");
                    float newMarks3 = sc.nextFloat();

                    boolean isUpdated = StudentServices.updateStudentRecords(id, newMarks1, newMarks2, newMarks3);
                    if (isUpdated)
                        System.out.println("\nUpdated the record successfully");
                    else
                        System.out.println("\nStudent not found for ID " + id + "!");
                }

                case 6 -> {
                    System.out.print("Enter ID: ");
                    int id = sc.nextInt();

                    int flag = StudentServices.deleteStudentById(id);
                    if (flag == 1)
                        System.out.println("\nStudent found & deleted successfully");
                    else if (flag == 2)
                        System.out.println("\nStudent found but not deleted");
                    else
                        System.out.println("\nStudent not found for ID " + id + "!");
                }

                case 7 -> {
                    System.out.println("Thank you for using our services.\nPlease, visit again...");
                    sc.close();
                }

                default -> System.out.println("Invalid Input.\nPlease, try again");
            }

        } while (choice != 7);
    }
}
