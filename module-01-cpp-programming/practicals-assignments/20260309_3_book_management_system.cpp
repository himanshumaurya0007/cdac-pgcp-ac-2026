#include <iostream>
#include <string>

using namespace std;

class Book
{
    int bookId;
    string title, author;
    float price;

public:
    // Function to take input
    void input()
    {
        cout << "\nEnter Book ID: ";
        cin >> bookId;
        cin.ignore(); // Clear buffer

        cout << "Enter Book Title: ";
        getline(cin, title);

        cout << "Enter Author Name: ";
        getline(cin, author);

        cout << "Enter Book Price: ";
        cin >> price;
    }

    // Function to display book information
    void display()
    {
        cout << "\nBook ID: " << bookId;
        cout << "\nTitle: " << title;
        cout << "\nAuthor: " << author;
        cout << "\nPrice: " << price << endl;
    }
};

int main()
{
    const int SIZE = 4;
    Book books[SIZE]; // Array of 4 Book objects

    // Taking input
    cout << "Enter details of 4 books:\n";
    for (int i = 0; i < SIZE; i++)
    {
        cout << "\n------- Book " << i + 1 << " -------";
        books[i].input();
    }

    // Displaying information
    cout << "\n\nDisplaying Book Details:\n";
    for (int i = 0; i < SIZE; i++)
    {
        cout << "\n------- Book " << i + 1 << " -------";
        books[i].display();
    }

    return 0;
}