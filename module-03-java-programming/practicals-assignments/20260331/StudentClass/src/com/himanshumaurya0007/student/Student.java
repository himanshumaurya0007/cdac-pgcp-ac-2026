package com.himanshumaurya0007.student;

import java.text.SimpleDateFormat;
import java.util.Date;

public class Student {
    private int studentId;
    private String studentName;
    private float mark1;
    private float mark2;
    private float mark3;
    private Date joiningDate;

    public Student() {
        System.out.print("\nIn default constructor (No-argument constructor) - Student class");
        this.studentId = 0; // It is optional to write 'this' keyword here.
        studentName = null;
        mark1 = 0f;
        mark2 = 0f;
        mark3 = 0f;
        joiningDate = null;
    }

    //    Parameterised Constructor
    public Student(int id, String name, float m1, float m2, float m3, Date joinDate) {
        System.out.print("\nIn parameterised constructor - Student class");
        this.studentId = id; // It is optional to write 'this' keyword here.
        studentName = name;
        this.mark1 = m1;
        this.mark2 = m2;
        this.mark3 = m3;
        joiningDate = joinDate;
    }

    //    Function/Method Members
    public void display() {
        System.out.println("\n------- Student Details -------");
        System.out.println("ID: " + studentId);
        System.out.println("Name: " + studentName);
        System.out.println("Mark 1: " + mark1);
        System.out.println("Mark 2: " + mark2);
        System.out.println("Mark 3: " + mark3);
        System.out.println("Joining Date: " + joiningDate);
    }

    //    Getters & Setters

    //    Getters
    public int getStudentId() {
        return studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public float getStudentMark1() {
        return mark1;
    }

    public float getStudentMark2() {
        return mark2;
    }

    public float getStudentMark3() {
        return mark3;
    }

    public Date getJoiningDate() {
        return joiningDate;
    }

    //    Setters
    public void setStudentId(int sId) {
        studentId = sId;
    }

    public void setStudentName(String name) {
        studentName = name;
    }

    public void setStudentMark1(float mark1) {
        this.mark1 = mark1;
    }

    public void setStudentMark2(float mark2) {
        this.mark2 = mark2;
    }

    public void setStudentMark3(float mark3) {
        this.mark3 = mark3;
    }

    public void setJoiningDate(Date jDate) {
        joiningDate = jDate;
    }

    public String toString() {
        System.out.println("\nIn Student toString() method");

//        ------- Formatting the date as per user requirements -------
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

        // Null-safe date formatting
        String formattedDate = (joiningDate != null)
                ? sdf.format(joiningDate)
                : "N/A";

        return "ID: " + studentId +
                " | Name: " + studentName +
                " | Mark 1: " + mark1 +
                " | Mark 2: " + mark2 +
                " | Mark 3: " + mark3 +
                " | Joining Date: " + formattedDate;
    }
}