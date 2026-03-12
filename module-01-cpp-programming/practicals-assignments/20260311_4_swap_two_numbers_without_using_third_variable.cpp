#include <iostream>

using namespace std;

int main()
{
    // ------- Method 1: Using Addition and Subtraction -------
    int a, b;

    cout << "Enter two numbers: ";
    cin >> a >> b;

    cout << "Method 1: Using Addition and Subtraction" << endl
         << endl;

    cout << "Before swapping" << endl;
    cout << "a = " << a << endl;
    cout << "b = " << b << endl
         << endl;

    cout << "Swapping..." << endl;
    // Swapping without third variable
    a = a + b;
    cout << "a (a + b) = " << a << endl;

    b = a - b;
    cout << "b (a - b) = " << b << endl;

    a = a - b;
    cout << "a (a - b) = " << a << endl
         << endl;

    cout << "After swapping" << endl;
    cout << "a = " << a << endl;
    cout << "b = " << b << endl
         << endl;

    // ------- Method 2: Using XOR Operator -------
    cout << "Method 2: Using XOR Operator" << endl
         << endl;

    cout << "Before swapping" << endl;
    cout << "a = " << a << endl;
    cout << "b = " << b << endl
         << endl;

    cout << "Swapping..." << endl;
    // Swapping without third variable
    a = a ^ b;
    cout << "a (a ^ b) = " << a << endl;

    b = a ^ b;
    cout << "b (a ^ b) = " << b << endl;

    a = a ^ b;
    cout << "a (a ^ b) = " << a << endl
         << endl;

    cout << "After swapping" << endl;
    cout << "a = " << a << endl;
    cout << "b = " << b;

    return 0;
}