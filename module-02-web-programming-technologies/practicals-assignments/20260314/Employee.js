class Employee {
    constructor(fName, lName, mail, position, bSalary) {
        this.firstName = fName;
        this.lastName = lName;
        this.email = mail;
        this.designation = position;
        this.basicSalary = bSalary;
    }

    display() {
        console.log("First name: ", this.firstName);
        console.log("Last name: ", this.lastName);
        console.log("Email: ", this.email);
        console.log("Designation: ", this.designation);
        console.log("Basic salary: ", this.basicSalary);
    }

    getFirstName()
    {
        return this.firstName;
    }

    getLastName()
    {
        return this.lastName;
    }

    getEmail()
    {
        return this.email;
    }
    
    getDesignation()
    {
        return this.designation;
    }

    getBasicSalary()
    {
        return this.basicSalary;
    }

    setFirstName(fName)
    {
        return this.firstName = fName;
    }
    
    setLastName(lName)
    {
        return this.lastName = lName;
    }
    
    setEmail(mail)
    {
        return this.email = mail;
    }

    setDesignation(position)
    {
        return this.designation = position;
    }

    setBasicSalary(bSalary)
    {
        return this.basicSalary = bSalary;
    }
}

module.exports = Employee;