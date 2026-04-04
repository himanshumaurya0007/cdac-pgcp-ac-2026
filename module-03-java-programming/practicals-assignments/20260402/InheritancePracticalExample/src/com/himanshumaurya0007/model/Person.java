package com.himanshumaurya0007.model;

public class Person {
    private int personId;
    private String personName;
    private String personMobile;

    public Person() {
        System.out.println("In Person() constructor");
    }

    public Person(int personId, String personName, String personMobile) {
        System.out.println("In Person() parameterised constructor");

        this.personId = personId;
        this.personName = personName;
        this.personMobile = personMobile;
    }

    public int getPersonId() {
        return personId;
    }

    public void setPersonId(int personId) {
        this.personId = personId;
    }

    public String getPersonName() {
        return personName;
    }

    public void setPersonName(String personName) {
        this.personName = personName;
    }

    public String getPersonMobile() {
        return personMobile;
    }

    public void setPersonMobile(String personMobile) {
        this.personMobile = personMobile;
    }

    @Override
    public String toString() {
        return "Person{" +
                "personId=" + personId +
                ", personName='" + personName + '\'' +
                ", personMobile='" + personMobile + '\'' +
                '}';
    }
}
