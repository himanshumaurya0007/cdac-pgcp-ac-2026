#include <iostream>

using namespace std;

int main()
{
     int i, j;

     for (i = 1; i < 6; i++)
     {
          char c = 'A';
          for (j = 1; j <= i; j++)
          {
               cout << c << " ";
               c++;
          }
          cout << endl;
     }

     cout << "\nReverse triangle: " << endl;
     for (i = 6; i > 1; i--)
     {
          char c = 'A';
          for (j = 1; j < i; j++)
          {
               cout << c << " ";
               c++;
          }
          cout << endl;
     }
     return 0;
}