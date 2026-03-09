#include <iostream>
using namespace std;

class Calculator
{
    int num1, num2;

public:
    // Accept numbers
    void accept()
    {
        cout << "Enter number 1: ";
        cin >> num1;

        cout << "Enter number 2: ";
        cin >> num2;
    }

    void add()
    {
        cout << "\nAddition = " << num1 + num2;
    }

    void subtract()
    {
        cout << "\nSubtraction = " << num1 - num2;
    }

    void multiply()
    {
        cout << "\nMultiplication = " << num1 * num2;
    }

    void divide()
    {
        if (num2 != 0)
            cout << "\nDivision = " << (float)num1 / num2;
        else
            cout << "\nDivision by zero is not allowed.";
    }

    void square()
    {
        cout << "\nSquare of " << num1 << " = " << num1 * num1;
        cout << "\nSquare of " << num2 << " = " << num2 * num2;
    }
};

int main()
{
    Calculator c;

    c.accept(); // Take input once

    c.add();
    c.subtract();
    c.multiply();
    c.divide();
    c.square();

    return 0;
}