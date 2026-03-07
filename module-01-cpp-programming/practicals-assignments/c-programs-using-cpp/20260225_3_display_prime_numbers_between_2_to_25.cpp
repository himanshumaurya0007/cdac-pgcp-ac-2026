#include <iostream>

using namespace std;

int main()
{
    int num, i, isPrime;

    cout << "Prime numbers between 2 and 25: ";

    for (num = 2; num <= 25; num++)
    {
        isPrime = 1; // Assume number is prime

        // Check divisibility
        for (i = 2; i <= num / 2; i++)
        {
            if (num % i == 0)
            {
                isPrime = 0; // Not prime
                break;
            }
        }

        // Print if prime
        if (isPrime == 1)
        {
            cout << num << " ";
        }
    }

    return 0;
}