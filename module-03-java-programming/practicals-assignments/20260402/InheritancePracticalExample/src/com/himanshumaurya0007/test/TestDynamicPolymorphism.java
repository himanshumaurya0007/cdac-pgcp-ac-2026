package com.himanshumaurya0007.test;

import com.himanshumaurya0007.model.ContractEmployee;
import com.himanshumaurya0007.model.Employee;
import com.himanshumaurya0007.model.SalariedEmployee;
import com.himanshumaurya0007.model.Vendor;

import java.util.Scanner;

public class TestDynamicPolymorphism {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        Employee e = null;

        int choice;

        do {
            System.out.print("\n------- Menu Options -------");

            System.out.print("\nTo create objects with default constructor (No-arg constructor); use following menu options: ");
            System.out.print("\n1. SalariedEmployee");
            System.out.print("\n2. ContractEmployee");
            System.out.print("\n3. Vendor");

            System.out.print("\n\nTo create objects with parameterised constructor; use following menu options: ");
            System.out.print("\n4. SalariedEmployee");
            System.out.print("\n5. ContractEmployee");
            System.out.print("\n6. Vendor");

            System.out.println("\n\n7. Exit");

            System.out.print("\nEnter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> {
                    System.out.println();
                    e = new SalariedEmployee();
                }
                case 2 -> {
                    System.out.println();
                    e = new ContractEmployee();
                }
                case 3 -> {
                    System.out.println();
                    e = new Vendor();
                }
                case 4 -> {
                    System.out.print("\nEnter ID: ");
                    int id = sc.nextInt();

                    sc.nextLine();
                    System.out.print("Enter name: ");
                    String name = sc.nextLine();

                    System.out.print("Enter mobile: ");
                    String mobile = sc.nextLine();

                    System.out.print("Enter department: ");
                    String department = sc.nextLine();

                    System.out.print("Enter designation: ");
                    String designation = sc.nextLine();

                    System.out.print("Enter salary: ");
                    double salary = sc.nextDouble();

                    System.out.println();
                    e = new SalariedEmployee(id, name, mobile, department, designation, salary);

                    System.out.println();
                    System.out.println("Your salary is " + e.calculateSalary());
                    System.out.println();

//                  bonus percentage (e.g. 0.10 for 10%)
                    System.out.println("Your bonus: " + ((SalariedEmployee) e).calculateBonus(0.10f));
                    System.out.println();
                }
                case 5 -> {
                    System.out.print("\nEnter ID: ");
                    int id = sc.nextInt();

                    sc.nextLine();
                    System.out.print("Enter name: ");
                    String name = sc.nextLine();

                    System.out.print("Enter mobile: ");
                    String mobile = sc.nextLine();

                    System.out.print("Enter department: ");
                    String department = sc.nextLine();

                    System.out.print("Enter designation: ");
                    String designation = sc.nextLine();

                    System.out.print("Enter working hours: ");
                    float hours = sc.nextFloat();

                    System.out.print("Enter charges per hour: ");
                    float charges = sc.nextFloat();

                    System.out.println();
                    e = new ContractEmployee(id, name, mobile, department, designation, hours, charges);

                    System.out.println();
                    System.out.println("Your salary is " + e.calculateSalary());
                    System.out.println();
                }
                case 6 -> {
                    System.out.print("\nEnter ID: ");
                    int id = sc.nextInt();
                    sc.nextLine();

                    System.out.print("Enter name: ");
                    String name = sc.nextLine();

                    System.out.print("Enter mobile: ");
                    String mobile = sc.nextLine();

                    System.out.print("Enter department: ");
                    String department = sc.nextLine();

                    System.out.print("Enter designation: ");
                    String designation = sc.nextLine();

                    System.out.print("Enter number of employees: ");
                    int numberOfEmployees = sc.nextInt();

                    System.out.print("Enter charge per employee: ");
                    float chargePerEmployee = sc.nextFloat();

                    System.out.println();
                    e = new Vendor(id, name, mobile, department, designation, numberOfEmployees, chargePerEmployee);

                    System.out.println();
                    System.out.println("Your salary is " + e.calculateSalary());
                    System.out.println();
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
                if (e != null) {
                    System.out.println(e);
                }
            }
        } while (choice != 7);
    }
}
