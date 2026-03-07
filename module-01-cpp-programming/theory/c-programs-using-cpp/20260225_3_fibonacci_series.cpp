#include <iostream>

using namespace std;
int main()
{
    int num, i = 3;
    int n1 = 0, n2 = 1, n3;

    cout << "Enter number of terms: ";
    cin >> num;

    cout << "Fibonacci series: ";
    cout << n1 << " " << n2 << " ";

    while (i <= num)
    {
        n3 = n1 + n2;
        cout << n3 << " ";
        n1 = n2;
        n2 = n3;
        i++;
    }

    return 0;
}