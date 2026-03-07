#include <iostream>

using namespace std;
int main()
{
    int num, i = 2;

    cout << "Enter number: ";
    cin >> num;

    while (i < num)
    {
        if (num % i == 0)
            break;
        i++;
    }

    if (i == num)
        cout << "Prime";
    else
        cout << "Not a Prime";

    return 0;
}