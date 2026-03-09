#include <iostream>
// #include <math.h>
#include <cmath>

using namespace std;

int main()
{
    cout << "pow(7,2) = " << pow(7, 2) << endl;
    cout << "pow(-7,2) = " << pow(-7, 2) << endl;
    cout << "pow(7,-2) = " << pow(7, -2) << endl;
    cout << "pow(-7,-2) = " << pow(-7, -2) << endl
         << endl;

    cout << "sqrt(169) = " << sqrt(169) << endl;
    cout << "sqrt(324) = " << sqrt(324) << endl;
    cout << "sqrt(-324) = " << sqrt(-324) << endl
         << endl;

    cout << "abs(1999) = " << abs(1999) << endl;
    cout << "abs(-1999) = " << abs(-1999) << endl
         << endl;

    cout << "ceil(69.4) = " << ceil(69.4) << endl;
    cout << "ceil(73.8) = " << ceil(73.8) << endl;
    cout << "ceil(-69.4) = " << ceil(-69.4) << endl;
    cout << "ceil(-73.8) = " << ceil(-73.8) << endl
         << endl;

    cout << "floor(69.4) = " << floor(69.4) << endl;
    cout << "floor(73.8) = " << floor(73.8) << endl;
    cout << "floor(-69.4) = " << floor(-69.4) << endl;
    cout << "floor(-73.8) = " << floor(-73.8) << endl
         << endl;

    cout << "round(69.4) = " << round(69.4) << endl;
    cout << "round(69.49) = " << round(69.49) << endl;
    cout << "round(69.50) = " << round(69.50) << endl;
    cout << "round(73.51) = " << round(73.51) << endl;
    cout << "round(73.8) = " << round(73.8) << endl;
    cout << "round(-69.4) = " << round(-69.4) << endl;
    cout << "round(-73.8) = " << round(-73.8) << endl
         << endl;

    cout << "log(10) = " << log(10) << endl;       // natural log
    cout << "log10(100) = " << log10(100) << endl; // base 10
    cout << "log2(8) = " << log2(8) << endl        // base 2
         << endl;

    cout << "exp(2) = " << exp(2) << endl;
    cout << "exp2(3) = " << exp2(3) << endl
         << endl;

    cout << "fmin(10,20) = " << fmin(10, 20) << endl;
    cout << "fmax(10,20) = " << fmax(10, 20) << endl
         << endl;

    cout << "fmod(10,3) = " << fmod(10, 3) << endl;
    cout << "remainder(10,3) = " << remainder(10, 3) << endl
         << endl;

    cout << "cbrt(27) = " << cbrt(27) << endl
         << endl;

    cout << "trunc(3.9) = " << trunc(3.9) << endl;
    cout << "fabs(-7.5) = " << fabs(-7.5) << endl
         << endl;

    cout << "copysign(5,-3) = " << copysign(5, -3) << endl
         << endl;

    cout << "PI: " << M_PI << endl;          // 3.141592653589793
    cout << "Euler number: " << M_E << endl; // Euler number
    return 0;
}