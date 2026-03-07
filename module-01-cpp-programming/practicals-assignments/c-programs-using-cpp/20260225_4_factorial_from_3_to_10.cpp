#include <iostream>

using namespace std;

int main()
{
    int i, j;

    for (i = 3; i < 11; i++)
    {
        int fact = 1;
        for (j = 1; j <= i; j++)
        {
            fact *= j;
        }
        cout << "Factorial of " << i << " is " << fact << "." << endl;
    }

    return 0;
}