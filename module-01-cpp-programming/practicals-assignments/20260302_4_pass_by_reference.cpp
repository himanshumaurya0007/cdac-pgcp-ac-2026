#include <iostream>

using namespace std;

void swap(int &x, int &y)
{
     int temp;

     cout << "In swap() function, before swapping.\n";
     cout << "Value of x: " << x << ", and y: " << y << endl;
     cout << "Value of &x: " << &x << ", and &y: " << &y << endl;

     temp = x;
     cout << "\nValue of temp: " << temp << endl;
     cout << "Value of &temp: " << &temp << endl;

     x = y;
     cout << "\nValue of x: " << x << endl;

     y = temp;
     cout << "Value of y: " << y << endl;

     cout << "\nIn swap() function, after swapping.\n";
     cout << "Value of x: " << x << ", and y: " << y << endl;
     cout << "Value of &x: " << &x << ", and &y: " << &y << endl;
}

int main()
{
     // int a, b;

     // cout << "Enter the value of a and b: ";
     // cin >> a >> b;

     int a = 13, b = 18; // Uncomment if you do have to take input from user

     cout << "\nIn main() function, before swapping.\n";
     cout << "Value of a: " << a << ", and b: " << b << endl;
     cout << "Value of &a: " << &a << ", and &b: " << &b << endl
          << endl;

     swap(a, b);

     cout << "\nIn main() function, after swapping.\n";
     cout << "Value of a: " << a << ", and b: " << b << endl;
     cout << "Value of &a: " << &a << ", and &b: " << &b << endl;

     return 0;
}