#include <iostream>

using namespace std;

void area(int s)
{
    cout << "area of square = " << s * s << endl;
}

void area(int l, int b)
{
    cout << "area of rectangle = " << l * b << endl;
}

int main()
{
    area(50);
    area(10, 20);

    return 0;
}