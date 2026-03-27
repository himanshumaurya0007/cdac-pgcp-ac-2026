package com.himanshumaurya0007;

import java.util.Date;

public class TestStudent {
    public static void main(String[] args) {
//        Student s1 = new Student(1, "Himanshu", 260.0f, 245.2f, 920.6f, new Date());
//        s1.display();

//        Student s2 = new Student(7, "Dhoni", 77.0f, 81.2f, 78.6f, new Date());
//        s2.display();

//        ------- Performing "get operations" on object EXPLICITLY using getters methods -------
//        String name = s2.getStudentName();
//        System.out.println(name);
//        System.out.println(s2.getJoiningDate());

//        ------- Performing "set operations" on object EXPLICITLY using setters methods -------
//        s2.setStudentName("Viraj");
//        System.out.println(s2.getStudentName());
//        s2.setStudentMark3(99.99f);
//        System.out.println(s2.getStudentMark3());
//        s2.display();

//        Student s3 = new Student();
//        s3.display();

//        ------- Performing "get operations" on object EXPLICITLY using getters methods -------
//        System.out.println();
//        System.out.println("s3.getStudentId(): " + s3.getStudentId());
//        System.out.println("s3.getStudentName(): " + s3.getStudentName());
//        System.out.println("s3.getStudentMark2(): " + s3.getStudentMark2());
//        System.out.println("s3.getJoiningDate(): " + s3.getJoiningDate());
//        System.out.println("s3.getStudentMark1(): " + s3.getStudentMark1());
//        System.out.println("s3.getStudentMark3(): " + s3.getStudentMark3());

//        ------- Performing "set operations" on object EXPLICITLY using setters methods -------
//        System.out.println();

//        s3.setJoiningDate(new Date());
//        System.out.println("s3.setJoiningDate(new Date())");

//        s3.setStudentName("Omkar");
//        System.out.println("s3.setStudentName(\"Omkar\")");

//        s3.setStudentMark3(87.5f);
//        System.out.println("s3.setStudentMark3(87.5f)");

//        s3.setStudentMark2(98.6f);
//        System.out.println("s3.setStudentMark2(98.6f)");

//        s3.setStudentId(99);
//        System.out.println("s3.setStudentId(99)");

//        s3.display();

//        ------- REASON (Why not to use display() explicitly and prefer toString()):  -------
//        In OOP (especially in Java), it is considered a best practice to override and use the toString() method instead of creating custom display methods like display().
//        1. Automatic Invocation: toString() is automatically called when you pass an object to "System.out.println(s1);".
//        2. Standard Java Convention:
//              a. toString() is a standard method defined in the Object class.
//              b. Every Java developer expects objects to provide meaningful output via toString().
//        3. Cleaner & Readable Code: (Makes code: More concise, More readable, More maintainable).
//        4. Better Integration
//              a. toString() is used internally by:
//                  i. Logging frameworks
//                  ii. Debuggers
//                  iii. Collections (like ArrayList)
//                  iv. String concatenation
//        5. Separation of Concerns
//              a. display() mixes data formatting + printing
//              b. toString() only returns formatted data
//        6. Reusability: toString() can be reused anywhere.

        Student s1 = new Student(1, "Himanshu", 260.0f, 245.2f, 920.6f, new Date());
        System.out.println(s1);

        Student s2 = new Student(7, "Dhoni", 77.0f, 81.2f, 78.6f, new Date());
        System.out.println(s2);

        Student s3 = new Student();
        System.out.println(s3);

//        ------- Performing "get operations" on object EXPLICITLY using getters methods -------
        System.out.println();
        System.out.println("s3.getStudentId(): " + s3.getStudentId());
        System.out.println("s3.getStudentName(): " + s3.getStudentName());
        System.out.println("s3.getStudentMark2(): " + s3.getStudentMark2());
        System.out.println("s3.getJoiningDate(): " + s3.getJoiningDate());
        System.out.println("s3.getStudentMark1(): " + s3.getStudentMark1());
        System.out.println("s3.getStudentMark3(): " + s3.getStudentMark3());

//        ------- Performing "set operations" on object EXPLICITLY using setters methods -------
        System.out.println();

        s3.setJoiningDate(new Date());
        System.out.println("s3.setJoiningDate(new Date())");

        s3.setStudentName("Omkar");
        System.out.println("s3.setStudentName(\"Omkar\")");

        s3.setStudentMark3(87.5f);
        System.out.println("s3.setStudentMark3(87.5f)");

        s3.setStudentMark2(98.6f);
        System.out.println("s3.setStudentMark2(98.6f)");

        s3.setStudentId(99);
        System.out.println("s3.setStudentId(99)");

        System.out.println(s3);
    }
}
