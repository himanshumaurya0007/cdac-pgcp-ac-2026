#include <iostream>

using namespace std;

class SortArray
{
    int arr[10];

public:
    void input()
    {
        cout << "Enter 10 elements:\n";
        for (int i = 0; i < 10; i++)
        {
            cin >> arr[i];
        }
    }

    void sortArray()
    {
        for (int i = 0; i <= 9; i++)
        {
            for (int j = 0; j < 9 - i; j++)
            {
                if (arr[j] > arr[j + 1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    void display()
    {
        cout << "Sorted array in ascending order is ";
        for (int i = 0; i < 10; i++)
        {
            cout << arr[i] << " ";
        }
    }
};

int main()
{
    SortArray obj;

    obj.input();
    obj.sortArray();
    obj.display();

    return 0;
}