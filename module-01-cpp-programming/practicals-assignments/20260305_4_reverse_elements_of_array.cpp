#include <iostream>

using namespace std;

int main()
{
    int a[] = {1, 2, 3, 4, 5};

    int i, j;

    int n = sizeof(a) / sizeof(a[0]);

    int b[n];

    j = 4;

    for (i = 0; i < n, j >= 0; i++, j--)
    {
        b[j] = a[i];
    }

    cout << "reverse array is = ";
    for (i = 0; i < n; i++)
    {
        cout << b[i] << " ";
    }

    return 0;
}