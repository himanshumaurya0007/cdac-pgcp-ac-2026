#include <iostream>

using namespace std;

int main()
{
    int num = 121;
    int originalNum, lastDigit, reverse = 0;

    // Handle base case
    if (num <= 0)
    {
        cout << "Palindrome can't be calculated for negative or zero numbers.";
        return 0;
    }

    originalNum = num;

    // Reverse the number
    while (num > 0)
    {
        lastDigit = num % 10;
        reverse = reverse * 10 + lastDigit;
        num /= 10;
    }

    if (originalNum == reverse)
        cout << originalNum << " is a palindrome." << endl;
    else
        cout << originalNum << " is not a palindrome." << endl;

    return 0;
}