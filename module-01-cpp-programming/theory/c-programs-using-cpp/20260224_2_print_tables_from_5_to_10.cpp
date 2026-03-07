#include <iostream>

using namespace std;

int main()
{
    int i, j;

    for (i = 5; i <= 10; i++)
    {
        for (j = 1; j <= 10; j++)
        {
            cout << i << " X " << j << " = " << (i * j) << endl;
        }
        cout << endl;
    }

    return 0;
}