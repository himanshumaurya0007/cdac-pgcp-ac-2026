package com.himanshumaurya0007.model;

public abstract class Employee extends Person {
    private String department;
    private String designation;

    public Employee() {
        System.out.println("In Employee() constructor");
    }

    public Employee(int personId, String personName, String personMobile, String department, String designation) {
        super(personId, personName, personMobile);

        System.out.println("In Employee() parameterised constructor");

        this.department = department;
        this.designation = designation;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    @Override
    public String toString() {
//        return super.toString() + "Employee{" +
        return super.toString() + " is called by " + "Employee{" +
                "department='" + department + '\'' +
                ", designation='" + designation + '\'' +
                '}';
    }

    public abstract double calculateSalary();
}
