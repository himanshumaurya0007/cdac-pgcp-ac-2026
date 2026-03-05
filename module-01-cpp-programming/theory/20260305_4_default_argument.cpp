#include <iostream>

using namespace std;

void func(int a, bool flag = true)
{
    if (flag == true)
        cout << "func is true. a = " << a << endl;
    else
        cout << "func is false. a = " << a << endl;
}

int main()
{

    func(10);
    // func();
    func(10, true);
    func(10, false);

    return 0;
}