#include <iostream>

using namespace std;

class Analyzer
{
private:
    int n;
    int *arr;

public:
    Analyzer()
    {
        n = 0;
        arr = nullptr;
    }

    void input()
    {
        int i;

        cout << "Enter the number of elements: ";
        cin >> n;

        arr = new int[n];

        cout << "Enter " << n << " elements: ";
        for (i = 0; i < n; i++)
        {
            cin >> arr[i];
        }
        cout << endl;
    }

    void analyze()
    {
        int i;
        int max = arr[0];
        int min = arr[0];
        int sum = 0;
        double avg;

        cout << n << " elements are as follows: ";
        for (i = 0; i < n; i++)
        {
            cout << arr[i] << " ";
        }

        for (i = 0; i < n; i++)
        {
            if (arr[i] > max)
                max = arr[i];

            if (arr[i] < min)
                min = arr[i];

            sum += arr[i];
        }

        cout << endl
             << endl;
        avg = (double)sum / n;

        cout << "Maximum number: " << max << endl;
        cout << "Minimum number: " << min << endl;
        cout << "Average value: " << avg;
    }

    // Destructor to free the memory of the heap section, as we have used pointer variable (arr) in class.
    ~Analyzer()
    {
        delete[] arr;
    }
};

int main()
{
    Analyzer obj;

    obj.input();
    obj.analyze();

    return 0;
}