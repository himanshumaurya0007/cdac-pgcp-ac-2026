#include <iostream>

using namespace std;

class BankAccount
{
     int accountNumber;
     float currentBalance;
     string name;

public:
     void accept()
     {
          cout << "Enter your name: ";
          cin >> name;

          cout << "\nEnter account number: ";
          cin >> accountNumber;

          cout << "\nEnter amount to deposit: ";
          cin >> currentBalance;
     }

     void checkBalance()
     {
          int accNo;

          cout << "\nEnter account number: ";
          cin >> accNo;

          if (accountNumber != accNo)
          {
               cout << "Wrong account number! Transaction failed." << endl;
          }
          else
          {
               cout << "Your current balance is " << currentBalance << endl;
          }
     }

     void depositMoney()
     {
          int accNo;
          float amt;

          cout << "\nEnter account number: ";
          cin >> accNo;

          cout << "Enter amount to be deposit: ";
          cin >> amt;

          if (accountNumber != accNo)
          {
               cout << "Wrong account number! Transaction failed." << endl;
          }
          else
          {
               currentBalance += amt;

               cout << "Amount deposited successfully." << endl;
               cout << "Your current balance is " << currentBalance << endl;
          }
     }

     void withdrawMoney()
     {
          int accNo;
          float amt;

          cout << "\nEnter account number: ";
          cin >> accNo;

          cout << "\nEnter amount to be debited: ";
          cin >> amt;

          if (accountNumber != accNo)
          {
               cout << "Wrong account number! Transaction failed." << endl;
          }
          else if (amt > currentBalance)
          {
               cout << "Sorry! Insufficient balance." << endl;
          }
          else
          {
               currentBalance -= amt;

               cout << "Withdrawal successful." << endl;
               cout << "Your remaining balance is " << currentBalance << endl;
          }
     }
};

int main()
{
     int choice;

     BankAccount bank1;

     bank1.accept();

     do
     {
          cout << "\n------- BANK MENU -------\n";
          cout << "1. Check Balance\n";
          cout << "2. Deposit Money\n";
          cout << "3. Withdraw Money\n";
          cout << "4. Exit\n";
          
          cout << "Enter your choice: ";
          cin >> choice;

          switch (choice)
          {
          case 1:
               bank1.checkBalance();
               break;

          case 2:
               bank1.depositMoney();
               break;

          case 3:
               bank1.withdrawMoney();
               break;

          case 4:
               cout << "Thank you for using the banking system." << endl;
               break;

          default:
               cout << "Invalid choice. Please try again." << endl;
          }

     } while (choice != 4);

     return 0;
}