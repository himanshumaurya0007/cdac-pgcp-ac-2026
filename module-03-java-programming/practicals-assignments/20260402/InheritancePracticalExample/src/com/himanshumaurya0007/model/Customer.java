package com.himanshumaurya0007.model;

public class Customer extends Person {
    private String customerAddress;
    private String customerType;

    public Customer() {
        System.out.println("In Customer() constructor");
    }

    public Customer(int personId, String personName, String personMobile, String customerAddress, String customerType) {
        super(personId, personName, personMobile);

        System.out.println("In Customer() parameterised constructor");

        this.customerAddress = customerAddress;
        this.customerType = customerType;
    }

    public String getCustomerAddress() {
        return customerAddress;
    }

    public void setCustomerAddress(String customerAddress) {
        this.customerAddress = customerAddress;
    }

    public String getCustomerType() {
        return customerType;
    }

    public void setCustomerType(String customerType) {
        this.customerType = customerType;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "Customer{" +
                "customerAddress='" + customerAddress + '\'' +
                ", customerType='" + customerType + '\'' +
                '}';
    }
}
