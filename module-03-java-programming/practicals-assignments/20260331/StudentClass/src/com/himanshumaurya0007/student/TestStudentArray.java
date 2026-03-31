package com.himanshumaurya0007.student;

public class TestStudentArray {
    public static void main(String[] args) {
        Student[] studentArray = new Student[5];

        StudentArrayServices.addStudents(studentArray);
        StudentArrayServices.displayStudents(studentArray);

    }
}
