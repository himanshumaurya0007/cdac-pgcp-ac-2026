#include <iostream>

using namespace std;

class DecimalToBinary
{
private:
    int num;
    int binary[32]; // to store binary digits
    int index;

public:
    void convert()
    {
        cout << "Enter a decimal number: ";
        cin >> num;

        if (num == 0)
        {
            binary[0] = 0;
            index = 1;
            return;
        }

        index = 0;

        while (num > 0)
        {
            binary[index] = num % 2;
            num = num / 2;
            index++;
        }
    }

    void display()
    {
        cout << "Binary equivalent: ";

        for (int i = index - 1; i >= 0; i--)
        {
            cout << binary[i];
        }

        cout << endl;
    }
};

int main()
{
    DecimalToBinary obj;

    obj.convert();
    obj.display();

    return 0;
}