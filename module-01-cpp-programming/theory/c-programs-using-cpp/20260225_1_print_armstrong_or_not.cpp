#include <iostream>

using namespace std;
int main()
{
    int num, originalNumber, lastDigit, sum = 0;

    cout << "Enter number: ";
    cin >> num;

    originalNumber = num;

    while (num != 0)
    {
        lastDigit = num % 10;
        sum += (lastDigit * lastDigit * lastDigit);
        num = num / 10;
    }

    if (originalNumber == sum)
        cout << "Armstrong";
    else
        cout << "Not a Armstrong";

    return 0;
}