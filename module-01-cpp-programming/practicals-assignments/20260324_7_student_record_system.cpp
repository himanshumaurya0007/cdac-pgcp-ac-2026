#include <iostream>
#include <map>
#include <fstream>

using namespace std;

class StudentRecordSystem
{
    map<int, string> records;

public:
    void addRecord()
    {
        int rollNo;
        string name;

        cout << "Enter roll number: ";
        cin >> rollNo;

        cin.ignore(); // to handle newline
        cout << "Enter name: ";
        getline(cin, name);

        records[rollNo] = name;

        cout << "Records added successfully" << endl;
    }

    void displayRecords()
    {
        if (records.empty())
        {
            cout << "No records found." << endl;
            return;
        }

        cout << endl
             << "Student records:" << endl;
        for (auto it : records)
        {
            cout << "Roll No: " << it.first << ", Name: " << it.second << endl;
        }
    }

    void saveToFile()
    {
        if (records.empty())
        {
            cout << "No records were found to save. Add at least one record first." << endl;
            return;
        }
        
        ofstream file("students.txt");

        if (!file)
        {
            cout << "Error in opening the file" << endl;
            return;
        }

        for (auto i : records)
        {
            file << i.first << " " << i.second << endl;
        }

        file.close();
        cout << "Records saved successfully to file \'students.txt\'" << endl;
    }
};

int main()
{
    StudentRecordSystem obj;
    int choice;

    do
    {
        cout << endl
             << "------- Student Record System -------" << endl;
        cout << "1. Add Record" << endl;
        cout << "2. Display Records" << endl;
        cout << "3. Save to File" << endl;
        cout << "4. Exit" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            obj.addRecord();
            break;

        case 2:
            obj.displayRecords();
            break;

        case 3:
            obj.saveToFile();
            break;

        case 4:
            cout << "Thank you for using our program." << endl
                 << "Exiting program..." << endl;
            break;

        default:
            cout << "Invalid choice! Try again" << endl;
            break;
        }
    } while (choice != 4);

    return 0;
}