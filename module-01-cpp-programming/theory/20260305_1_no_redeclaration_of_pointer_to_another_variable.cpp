#include <iostream>

using namespace std;

int main()
{
    int x = 11;
    int z = 67;
    int &y = x;
    int &y = z; // Compilation error!!!

    return 0;
}