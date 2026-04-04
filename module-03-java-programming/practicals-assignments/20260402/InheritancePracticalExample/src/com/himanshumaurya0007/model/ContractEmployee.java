package com.himanshumaurya0007.model;

public class ContractEmployee extends Employee {
    private float hours;
    private float charges;

    public ContractEmployee() {
        System.out.println("In ContractEmployee() constructor");
    }

    public ContractEmployee(int personId, String personName, String personMobile, String department, String designation, float hours, float charges) {
        super(personId, personName, personMobile, department, designation);

        System.out.println("In ContractEmployee() parameterised constructor");

        this.hours = hours;
        this.charges = charges;
    }

    public float getHours() {
        return hours;
    }

    public void setHours(float hours) {
        this.hours = hours;
    }

    public float getCharges() {
        return charges;
    }

    public void setCharges(float charges) {
        this.charges = charges;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "ContractEmployee{" +
                "hours=" + hours +
                ", charges=" + charges +
                '}';
    }

    @Override
    public double calculateSalary() {
        System.out.println("In class ContractEmployee > calculateSalary() ");

        return hours * charges;
    }
}
