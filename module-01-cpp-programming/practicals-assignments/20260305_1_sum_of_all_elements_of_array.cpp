#include <iostream>

using namespace std;

int main()
{
    int a[] = {1, 2, 3, 4, 5};

    int i, sum = 0;

    int n = sizeof(a) / sizeof(a[0]);

    for (i = 0; i < n; i++)
    {
        sum = sum + a[i];
    }

    cout << "Sum of five number is = " << sum;

    return 0;
}