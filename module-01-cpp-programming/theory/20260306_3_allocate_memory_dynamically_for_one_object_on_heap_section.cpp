#include <iostream>

using namespace std;

class Student
{
    int rollNo;
    float marks;

public:
    Student()
    {
        cout << "No arg constructor has run.\n";
        rollNo = 101;
        marks = 89.33f;
    }

    void display()
    {
        cout << "Roll number: " << rollNo << ", marks: " << marks << endl;
    }
};

int main()
{
    Student *ptr = new Student();

    ptr->display();

    return 0;
}