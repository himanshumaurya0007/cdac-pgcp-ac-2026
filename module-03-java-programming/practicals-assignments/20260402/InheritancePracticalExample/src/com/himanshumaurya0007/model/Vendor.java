package com.himanshumaurya0007.model;

public class Vendor extends Employee {
    private int numberOfEmployees;
    private float chargePerEmployee;

    public Vendor() {
        System.out.println("In Vendor() constructor");
    }

    public Vendor(int personId, String personName, String personMobile, String department, String designation, int numberOfEmployees, float chargePerEmployee) {
        super(personId, personName, personMobile, department, designation);

        System.out.println("In Vendor() parameterised constructor");

        this.numberOfEmployees = numberOfEmployees;
        this.chargePerEmployee = chargePerEmployee;
    }

    public int getNumberOfEmployees() {
        return numberOfEmployees;
    }

    public void setNumberOfEmployees(int numberOfEmployees) {
        this.numberOfEmployees = numberOfEmployees;
    }

    public float getChargesPerEmployee() {
        return chargePerEmployee;
    }

    public void setChargesPerEmployee(float chargePerEmployee) {
        this.chargePerEmployee = chargePerEmployee;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "Vendor{" +
                "numberOfEmployees=" + numberOfEmployees +
                ", chargePerEmployee=" + chargePerEmployee +
                '}';
    }

    @Override
    public double calculateSalary() {
        System.out.println("In class Vendor > calculateSalary() ");

        return numberOfEmployees * chargePerEmployee;
    }
}
