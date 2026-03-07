#include <iostream>

using namespace std;

int main()
{
    int n, lastDigit, reverse = 0;

    cout << "Enter number: ";
    cin >> n;

    while (n != 0)
    {
        lastDigit = n % 10;
        reverse = reverse * 10 + lastDigit;
        n /= 10;
    }

    cout << "Reversed number: " << reverse;

    return 0;
}