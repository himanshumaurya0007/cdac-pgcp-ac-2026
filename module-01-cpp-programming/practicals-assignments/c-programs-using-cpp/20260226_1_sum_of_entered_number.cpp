#include <iostream>

using namespace std;

int main()
{
    int n, i, lastDigit, sum = 0;

    cout << "Enter number: ";
    cin >> n;

    for (i = n; i >= 0; i++)
    {
        lastDigit = n % 10;
        sum += lastDigit;
        n /= 10;
    }

    cout << "Sum is " << sum << endl;

    return 0;
}