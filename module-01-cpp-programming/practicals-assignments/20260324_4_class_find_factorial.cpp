#include <iostream>

using namespace std;

class FindFactorial
{
private:
    int num;
    long fact;

public:
    void input()
    {
        cout << "Enter a number: ";
        cin >> num;
    }

    void calculate()
    {
        if (num < 0)
        {
            cout << "Factorial not defined for negative numbers.";
            return;
        }

        fact = 1;

        for (int i = 1; i <= num; i++)
        {
            fact = fact * i;
        }
    }

    void display()
    {
        if (num >= 0)
        {
            cout << "Factorial of " << num << " is " << fact << endl;
        }
    }
};

int main()
{
    FindFactorial obj;

    obj.input();
    obj.calculate();
    obj.display();

    return 0;
}