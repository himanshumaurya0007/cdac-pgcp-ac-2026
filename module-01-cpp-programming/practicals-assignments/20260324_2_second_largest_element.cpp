#include <iostream>

using namespace std;

int main()
{
    int n;

    cout << "Enter number of elements: ";
    cin >> n;

    if (n < 2)
    {
        cout << "Second largest element not possible.";
        return 0;
    }

    int arr[n];

    cout << "Enter elements:\n";
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }

    int largest = arr[0];
    int secondLargest = arr[0];

    // First, find the largest element
    for (int i = 1; i < n; i++)
    {
        if (arr[i] > largest)
        {
            largest = arr[i];
        }
    }

    // Now find second largest
    bool found = false;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] != largest)
        {
            if (!found || arr[i] > secondLargest)
            {
                secondLargest = arr[i];
                found = true;
            }
        }
    }

    if (!found)
    {
        cout << "No second largest element (all elements may be equal).";
    }
    else
    {
        cout << "Second largest element: " << secondLargest;
    }

    return 0;
}