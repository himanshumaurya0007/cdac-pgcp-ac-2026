package com.himanshumaurya0007.test;

import com.himanshumaurya0007.model.ContractEmployee;
import com.himanshumaurya0007.model.Customer;
import com.himanshumaurya0007.model.SalariedEmployee;
import com.himanshumaurya0007.model.Vendor;

public class TestAll {
    public static void main(String[] args) {
//        As "Employee class" has been converted into "Abstract class" so, its object cannot be created.
/*
        Employee e1 = new Employee();
        System.out.println("Creating object of class -------> Employee");
        System.out.println(e1);
        System.out.println();
*/

/*
        Employee e2 = new Employee(1, "Himanshu", "9998887776", "DS", "Senior Developer");
        System.out.println("Creating another object of class -------> Employee");
        System.out.println(e2);
        System.out.println();
*/

        SalariedEmployee se1 = new SalariedEmployee();
        System.out.println("Creating object of class -------> SalariedEmployee");
        System.out.println(se1);
        System.out.println();

        SalariedEmployee se2 = new SalariedEmployee(2, "Viraj", "1122334455", "E&TC", "Java Developer", 87443);
        System.out.println("Creating another object of class -------> SalariedEmployee");
        System.out.println(se2);
        System.out.println();

        ContractEmployee ce1 = new ContractEmployee();
        System.out.println("Creating object of class -------> ContractEmployee");
        System.out.println(ce1);
        System.out.println();

        ContractEmployee ce2 = new ContractEmployee(3, "Omkar", "1234567890", "CSE", "WPT Developer", 34, 453);
        System.out.println("Creating another object of class -------> ContractEmployee");
        System.out.println(ce2);
        System.out.println();

        Vendor v1 = new Vendor();
        System.out.println("Creating object of class -------> Vendor");
        System.out.println(v1);
        System.out.println();

        Vendor v2 = new Vendor(4, "Manvendra", "9876123456", "E&TC", "Developer", 12, 1200);
        System.out.println("Creating another object of class -------> Vendor");
        System.out.println(v2);
        System.out.println();

        Customer c1 = new Customer();
        System.out.println("Creating object of class -------> Customer");
        System.out.println(c1);
        System.out.println();

        Customer c2 = new Customer(10, "Akash", "1209348756", "Bhopal, MP", "Intern");
        System.out.println("Creating another object of class -------> Customer");
        System.out.println(c2);
        System.out.println();
    }
}
