#include <iostream>

using namespace std;

int main()
{
    int i, n;

    cout << "Enter n: ";
    cin >> n;

    int *ptr = new int[n];

    cout << "Enter " << n << " elements : ";
    for (i = 0; i < n; i++)
    {
        cin >> ptr[i];
    }

    cout << n << " elements are ";
    for (i = 0; i < n; i++)
    {
        cout << ptr[i] << " ";
    }

    return 0;
}