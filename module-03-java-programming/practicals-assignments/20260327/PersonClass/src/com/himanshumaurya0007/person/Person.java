package com.himanshumaurya0007.person;

public class Person {
    static int countOfId;

    static {
        countOfId = 0;
    }

    private String personId;
    private String personName;
    private String personMobile;

    private String generatePersonId(String personName, String personMobile) {
        countOfId++;
        return personName.substring(0, 3) + personMobile.substring(0, 3) + countOfId;
    }

    public Person() {
//        personId = "AAA001"; // Hardcoded ID

//        personId = generatePersonId("AAA", "0000000001");
//        personName = null;
//        personMobile = null;

//        Instead of writing it as above; we can use the following mechanism. (Works the same way)
//        This must be the first line of the method. (Only one explicit constructor call allowed in constructor)
//        this(null, null); // This cannot be used as we are using the values of 'personName' and 'personMobile' to generatePersonId.
        this("AAA", "0000000001");
    }

    public Person(String name, String mobile) {
//        personId = "AAA001"; // Hardcoded ID

//        Validation: This ensures invalid objects are never created.
        if (name == null || mobile == null) {
            throw new IllegalArgumentException("Name and Mobile cannot be null");
        }

        personId = generatePersonId(name, mobile);
        personName = name;
        personMobile = mobile;
    }

    //    Getters
    public String getPersonId() {
        return personId;
    }

    public String getPersonName() {
        return personName;
    }

    public String getPersonMobile() {
        return personMobile;
    }

    //    Setters
    public void setPersonName(String name) {
        personName = name;
    }

    public void setPersonMobile(String mobile) {
        personMobile = mobile;
    }

    @Override
    public String toString() {
        return "Your ID: " + personId +
                ", Name: " + personName +
                ", & Mobile: " + personMobile +
                "\n";
    }
}
