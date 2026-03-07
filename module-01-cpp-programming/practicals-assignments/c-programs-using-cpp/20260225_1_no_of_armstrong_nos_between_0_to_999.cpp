#include <iostream>

using namespace std;

int main()
{
    int i, count = 0;
    int originalNumber, lastDigit, sum;

    cout << "Armstrong numbers between 0 and 999: ";

    for (i = 0; i < 1000; i++)
    {
        originalNumber = i;
        sum = 0;

        while (originalNumber != 0)
        {
            lastDigit = originalNumber % 10;
            sum += (lastDigit * lastDigit * lastDigit);
            originalNumber /= 10;
        }

        if (i == 0)
            sum = 0;

        if (sum == i)
        {
            cout << i << " ";
            count++;
        }
    }
    cout << "\nTotal Armstrong numbers between 0 to 999 are " << count << endl;

    return 0;
}