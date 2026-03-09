#include <iostream>
#include <string.h>

using namespace std;

class Student
{
    int rollNo;
    char name[20];

public:
    void display();
    Student(int, char *);
};

void Student::display()
{
    cout << "Student roll number: " << rollNo << ", name: " << name << endl;
}

Student::Student(int r, char *sptr)
{
    rollNo = r;
    // name = sptr; // ERROR: As "name" itself a constant pointer so, it cannot store "sptr".
    strcpy(name, sptr);
}

int main()
{
    Student *ptr = new Student(1, "rahul");

    ptr->display();

    delete ptr;

    return 0;
}