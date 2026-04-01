package com.himanshumaurya0007.sms;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Scanner;

public class StudentServices {
    //        Assuming max 100 student data will be stored
    private static final int MAX_STUDENTS = 100;
    private static Student[] studentArray = new Student[MAX_STUDENTS];
    private static int currentIndex = 0;


    static {
        studentArray[0] = new Student(13, "Himanshu", 97, 67, 56, new Date());
        studentArray[1] = new Student(14, "Mahi", 77, 81, 78, new Date());
        currentIndex = 2;
    }


    public static boolean addStudent() {
        Scanner sc = new Scanner(System.in);

        System.out.println("\nEnter Student Details:");

        System.out.print("Enter ID: ");
        int studentId = sc.nextInt();

        sc.nextLine();
        System.out.print("Enter Name: ");
        String studentName = sc.nextLine();

        System.out.print("Enter Marks 1: ");
        float studentMarks1 = sc.nextFloat();

        System.out.print("Enter Marks 2: ");
        float studentMarks2 = sc.nextFloat();

        System.out.print("Enter Marks 3: ");
        float studentMarks3 = sc.nextFloat();

        System.out.print("Enter date (In format - (dd/MM/yyyy)): ");
        String studentJoiningDate = sc.next();

        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        Date joiningDate = null;
        try {
            joiningDate = sdf.parse(studentJoiningDate);
        } catch (ParseException e) {
//            throw new RuntimeException(e);
            System.out.println("Invalid date format!");
            return false;
        }

//        Check if array is not full
        if (currentIndex < MAX_STUDENTS) {
            studentArray[currentIndex] = new Student(studentId, studentName, studentMarks1, studentMarks2, studentMarks3, joiningDate);
            currentIndex++;
            return true;
        } else {
            return false;
        }

    }


    public static Student[] getAllStudents() {
        return studentArray;
    }


    public static Student getStudentById(int id) {
        for (int i = 0; i < currentIndex; i++) {
            if (studentArray[i].getStudentId() == id)
                return studentArray[i];
        }
        return null;
    }


    public static Student[] getStudentsByName(String name) {
        Student[] result = new Student[currentIndex];

        int i = 0;
        for (Student student : studentArray) {
            if (student != null) {
                if (student.getStudentName().equals(name)) {
                    result[i] = student;
                    i++;
                }
            } else {
                break;
            }
        }

        return (i > 0) ? result : null;
/*      OR
        if (i > 0)
            return result;

        return null;
*/
    }


    public static boolean updateStudentRecords(int id, float newMarks1, float newMarks2, float newMarks3) {
        Student student = getStudentById(id);

//        If found then update the marks using setter methods
        if (student != null) {
            student.setStudentMark1(newMarks1);
            student.setStudentMark2(newMarks2);
            student.setStudentMark3(newMarks3);
            return true;
        }

//        If not found
        return false;
    }


    public static int deleteStudentById(int id) {
        Scanner sc = new Scanner(System.in);

//        Search the student
        for (int i = 0; i < currentIndex; i++) {

            if (studentArray[i].getStudentId() == id) {

                System.out.println(studentArray[i]);
//            If found; confirm from user.
                System.out.print("Do you want to delete it? (y/n): ");
                String answer = sc.next();

                if (answer.equalsIgnoreCase("y")) {

//                    Delete student & shift each student to currentIndex.
                    for (int j = i; j < currentIndex; j++) {
                        studentArray[j] = studentArray[j + 1];
                    }

//                Assign last object to null & reduce currentIndex by one.
                    currentIndex--;
                    studentArray[currentIndex] = null;

/*                  OR
                    studentArray[currentIndex - 1] = null;
                    currentIndex--;
*/
                    return 1; // Found & Deleted
                } else {
                    return 2; // Found but NOT Deleted
                }
            }
        }
        return 3; // Not found
    }

}
