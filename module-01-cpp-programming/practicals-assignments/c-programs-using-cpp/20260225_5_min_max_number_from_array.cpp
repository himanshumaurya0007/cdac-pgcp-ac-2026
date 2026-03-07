#include <iostream>

using namespace std;

int main()
{
    int n, i;

    cout << "Enter number of elements: ";
    cin >> n;

    if (n <= 0)
    {
        cout << "Array size must be greater than 0.\n";
        return 1;
    }

    int arr[n];

    cout << "Enter " << n << " elements: ";
    for (i = 0; i < n; i++)
        cin >> arr[i];

    int min = arr[0];
    int max = arr[0];

    for (i = 1; i < n; i++)
    {
        if (arr[i] < min)
            min = arr[i];

        if (arr[i] > max)
            max = arr[i];
    }

    cout << "Minimum element: " << min << endl;
    cout << "Maximum element: " << max;

    return 0;
}