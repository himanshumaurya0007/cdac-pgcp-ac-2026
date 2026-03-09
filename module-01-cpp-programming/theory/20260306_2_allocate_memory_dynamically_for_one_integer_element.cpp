#include <iostream>

using namespace std;

int main()
{
    // int* ptr = new int; // Only declaration
    // *ptr = 10; // Initialisation

    // OR
    // Declaration and initialisation in one statement.
    int *ptr = new int(10); // Proivding initial value as 10.

    cout << "ptr: " << ptr << endl;
    cout << "&ptr: " << &ptr << endl;
    cout << "*ptr: " << *ptr;

    return 0;
}