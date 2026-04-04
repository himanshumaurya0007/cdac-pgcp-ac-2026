package com.himanshumaurya0007.model;

public class SalariedEmployee extends Employee {
    private double salary;
    private double bonus;

    public SalariedEmployee() {
        System.out.println("In SalariedEmployee() constructor");
    }

    public SalariedEmployee(int personId, String personName, String personMobile, String department, String designation, double salary) {
        super(personId, personName, personMobile, department, designation);

        System.out.println("In SalariedEmployee() parameterised constructor");

        this.salary = salary;
        this.bonus = 0.10 * salary; // 10% of salary
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double getBonus() {
        return bonus;
    }

    public void setBonus(double bonus) {
        this.bonus = bonus;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "SalariedEmployee{" +
                "salary=" + salary +
                ", bonus=" + bonus +
                '}';
    }

    @Override
    public double calculateSalary() {
        System.out.println("In class SalariedEmployee > calculateSalary() ");

/*
        Standard Salary Components Breakdown
        _________________________________________________________________
        | Component                     | Meaning      | Percentage     |
        | ----------------------------- | ------------ | -------------- |
        | Basic Salary                  | `sal`        | 100%           |
        | DA (Dearness Allowance)       | `0.10 * sal` | 10%            |
        | HRA (House Rent Allowance)    | `0.15 * sal` | 15%            |
        | PF (Provident Fund Deduction) | `0.08 * sal` | 8% (deduction) |
        | Bonus                         | `bonus`      | fixed          |
        _________________________________________________________________
*/

        return salary + (0.10 * salary) + (0.15 * salary) - (0.08 * salary) + bonus;
    }

    public double calculateBonus(float percentage) {
        System.out.println("In class SalariedEmployee > calculateBonus() ");

        bonus = salary * percentage;
        return bonus;
    }
}
