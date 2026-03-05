#include <iostream>

using namespace std;
int main()

{
    int a[] = {4, 3, 6, 3, 1, 0};

    int i, l = a[0];

    int n = sizeof(a) / sizeof(a[0]);

    for (i = 0; i < n; i++)
    {
        if (a[0] < a[i])
        {
            cout << "The Largest number in array is = " << a[i];
        }
    }

    return 0;
}