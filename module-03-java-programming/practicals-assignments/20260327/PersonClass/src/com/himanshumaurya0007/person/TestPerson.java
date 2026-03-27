package com.himanshumaurya0007.person;

public class TestPerson {
    public static void main() {
        Person p1 = new Person("Himanshu", "1234567890");
        System.out.println(p1);

        Person p2 = new Person("Viraj", "1234596807");
        System.out.println(p2);

        Person p3 = new Person();
        System.out.println(p3);

        p3.setPersonName("Omkar");
        System.out.println("p3.setPersonName(\"Omkar\")");

        p3.setPersonMobile("9988776644");
        System.out.println("p3.setPersonMobile(\"9988776644\")");

        System.out.println();
        System.out.println("p3.getPersonId(): " + p3.getPersonId());
        System.out.println("p3.getPersonName(): " + p3.getPersonName());
        System.out.println("p3.getPersonMobile(): " + p3.getPersonMobile());

        System.out.println();
        System.out.println(p3);

        Person p4 = new Person("Viraj", "1234596807");
        System.out.println(p4);
    }
}
