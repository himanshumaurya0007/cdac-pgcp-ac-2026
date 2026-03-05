#include <iostream>

using namespace std;

void display(char = '*', int = 3);

int main()
{
    int count = 5;

    cout << "No arg passed\n";
    display();

    cout << "First arg passed\n";
    display('#');

    cout << "Both arg passed\n";
    display('$', count);

    return 0;
}

void display(char c, int count)
{
    int i;
    for (i = 1; i <= count; i++)
        cout << c;
    cout << endl;
}