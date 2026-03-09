#include <iostream>

using namespace std;

int main()
{
    cout << "------- Logical operators -------" << endl;
    bool a = true;
    bool b = false;

    cout << "a && b (Logical AND): " << (a && b) << endl;
    cout << "a || b (Logical OR): " << (a || b) << endl;
    cout << "!a (Logical NOT): " << (!a) << endl
         << endl;

    cout << "------- Unary operators -------" << endl;
    int x = 5;

    cout << "Initil value of x: " << x << endl;
    cout << "Value of x (Pre-increment operator): " << x++ << endl;
    cout << "Value of x (Post-increment operator): " << ++x << endl;
    cout << "Value of x (Pre-decrement operator): " << x-- << endl;
    cout << "Value of x (Post-decrement operator): " << --x << endl;
    cout << "Value of x (Unary minus): " << -x << endl
         << endl;

    cout << "------- Ternary operators -------" << endl;
    int age = 17;

    string checkIfEligible = (age >= 18) ? "You are eligible" : "You are not eligible";
    cout << checkIfEligible << endl
         << endl;

    cout << "------- Assignment operators -------" << endl;
    int y = 10;

    cout << "Initial value of y: " << y << endl;

    y += 5;
    cout << "Value of y after y += 5: " << y << endl;

    y -= 5;
    cout << "Value of y after y -= 5: " << y << endl;

    y *= 5;
    cout << "Value of y after y *= 5: " << y << endl;

    y /= 5;
    cout << "Value of y after y /= 5: " << y << endl;

    y %= 5;
    cout << "Value of y after y %= 5: " << y << endl;

    return 0;
}