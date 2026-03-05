#include <iostream>

using namespace std;

int main()
{
    int i, even = 0, odd = 0;

    int a[] = {1, 2, 3, 4, 5};

    int n = sizeof(a) / sizeof(a[0]);

    for (i = 0; i < n; i++)
    {
        if (a[i] % 2 == 0)
            even++;
        else
            odd++;
    }
    cout << "Count of even numbers: " << even << "\n";
    cout << "Count of odd numbers: " << odd << endl;

    return 0;
}