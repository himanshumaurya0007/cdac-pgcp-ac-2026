#include <iostream>

using namespace std;

void swap(int, int);

int main()
{
    int a, b;

    cout << "Enter the value of a and b: ";
    cin >> a >> b;

    cout << "\nIn main() function, before swapping.\n";
    cout << "Value of a: " << a << ", and b: " << b << endl
         << endl;

    swap(a, b);

    cout << "In main() function, after swapping.\n";
    cout << "Value of a: " << a << ", and b: " << b << endl;

    return 0;
}

void swap(int x, int y)
{
    int temp;

    cout << "In swap() function, before swapping.\n";
    cout << "Value of x: " << x << ", and y: " << y << endl
         << endl;

    temp = x;
    x = y;
    y = temp;

    cout << "In swap() function, before swapping.\n";
    cout << "Value of x: " << x << ", and y: " << y << endl
         << endl;
}