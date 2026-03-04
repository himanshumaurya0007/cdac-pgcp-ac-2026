#include <iostream>

using namespace std;

class Student
{
    int rollNumber, date, month, year, totalMarks;

public:
    Student()
    {
        cout << "No arg constructor has run.\n";
        rollNumber = 1;
        date = 01;
        month = 01;
        year = 0001;
        totalMarks = 0;
    }

    Student(int r, int d, int m, int y, int tM)
    {
        rollNumber = r;
        date = d;
        month = m;
        year = y;
        totalMarks = tM;
        display();
    }

    void display()
    {
        cout << "Student roll number: " << rollNumber << ", DOB: " << date << "/" << month << "/" << year << ", and total marks: " << totalMarks << "." << endl;
    }
};

int main()
{
    Student s1(41, 3, 10, 2003, 90);
    Student s2(42, 5, 12, 2000, 100);
    Student s3(43, 7, 11, 2002, 80);
    Student s4(44, 9, 2, 2007, 60);
    Student s5(45, 11, 1, 2005, 40);
    Student s6(46, 13, 5, 2001, 50);
    Student s7(47, 15, 8, 2004, 33);
    Student s8(48, 17, 3, 2006, 45);
    Student s9(49, 19, 4, 2009, 69);
    Student s10(50, 21, 9, 1997, 99);
    return 0;
}