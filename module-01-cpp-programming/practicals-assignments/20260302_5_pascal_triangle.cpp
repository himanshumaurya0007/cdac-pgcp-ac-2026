#include <iostream>

using namespace std;

int main()
{
     int i, j, spaces, value;
     int rows = 6;

     for (i = 1; i < rows; i++)
     {
          value = 1;
          for (spaces = 1; spaces < rows - i; spaces++)
          {
               cout << " ";
          }

          for (j = 1; j <= i; j++)
          {
               cout << value << " ";
               value = value * (i - j) / j;
          }
          cout << endl;
     }
     return 0;
}