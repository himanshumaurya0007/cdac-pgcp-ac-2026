#include <iostream>

using namespace std;

int main()
{
     int i, n, lastDigit, count = 0;

     cout << "Enter number: ";
     cin >> n;

     // for (i = n; n > 0; i--)
     // {
     //      lastDigit = n % 10;
     //      count++;
     //      n = n / 10;
     // }

     // OR
     while (n > 0)
     {
          lastDigit = n % 10;
          count++;
          n = n / 10;
     }

     cout << count << " digits are present in the number.";

     return 0;
}