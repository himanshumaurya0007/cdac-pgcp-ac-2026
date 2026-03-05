#include <iostream>

using namespace std;

int main()
{
    int a = 100;
    int &b = a;
    int &c = b;
    cout << a << " " << b << " " << c << "\n";
    
    c = 200;
    cout << a << " " << b << " " << c << "\n";

    return 0;
}