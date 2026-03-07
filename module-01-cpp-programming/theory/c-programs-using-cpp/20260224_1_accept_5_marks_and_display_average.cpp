#include <iostream>

using namespace std;

int main()
{
    // ------- Easy way -------
    // int m1, m2, m3, m4, m5;
    // int sum;
    // float average;

    // cout << "Enter marks of 5 subjects: ";
    // cin >> m1 >> m2 >> m3 >> m4 >> m5;

    // sum = m1 + m2 + m3 + m4 + m5;

    // average = (float)sum / 5;

    // cout << "Average of marks of 5 subjects is " << average << endl;

    // ------- Using arrays -------
    int marks[5];
    int i, sum = 0;
    float average;

    cout << "Enter marks of 5 subjects: ";

    for (i = 0; i < 5; i++)
    {
        cin >> marks[i];
        sum += marks[i];
    }
    average = (float)sum / 5;

    cout << "Average of marks of 5 subjects is " << average << endl;

    return 0;
}