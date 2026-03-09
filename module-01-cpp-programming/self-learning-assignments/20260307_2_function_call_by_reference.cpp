#include <iostream>

using namespace std;

void swapTwoNumbers(int &a, int &b)
{
     cout << "In swap() function before swapping..." << endl;
     cout << "Value of a: " << a << ", and b: " << b << endl
          << endl;

     int temp = a;
     a = b;
     b = temp;

     cout << "In swap() function after swapping..." << endl;
     cout << "Value of a: " << a << ", and b: " << b << endl
          << endl;
}

int main()
{
     int x = 13, y = 18;

     cout << "In main() function before swapping..." << endl;
     cout << "Value of x: " << x << ", and y: " << y << endl
          << endl;

     swapTwoNumbers(x, y);

     cout << "In main() function after swapping..." << endl;
     cout << "Value of x: " << x << ", and y: " << y << endl;

     return 0;
}