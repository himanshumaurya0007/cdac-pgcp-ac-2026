#include <iostream>

using namespace std;

string companyName = "Samsung";

class Employee
{
     int empId, salary;
     string name;
     static int totalEmployees;

public:
     Employee()
     {
          cout << "No-argument constructor has run.\n";
          empId = 1;
          name = "Himanshu";
          salary = 18000;

          totalEmployees++;
     }

     Employee(int id, string n, int s)
     {
          cout << "Paramterized constructor has run.\n";
          empId = id;
          name = n;
          salary = s;

          totalEmployees++;
     }

     void display()
     {
          cout << "Employee's company name: " << companyName << ", id: " << empId << ", name: " << name << ", and salary: " << salary << endl
               << endl;
     }

     static void showTotalEmployees()
     {
          cout << "Total number of Employees created are " << totalEmployees;
     }
};

int Employee::totalEmployees;

int main()
{
     Employee e1(45, "Himanshu", 128000);
     e1.display();

     Employee e2(72, "Manvendra", 38732);
     e2.display();

     Employee e3(83, "Akash", 22673);
     e3.display();

     Employee e4(22, "Viraj", 29273);
     e4.display();

     Employee e5(49, "Omkar", 37487);
     e5.display();

     Employee::showTotalEmployees();

     return 0;
}