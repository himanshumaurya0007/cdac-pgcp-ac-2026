#include <iostream>
#include <vector>

using namespace std;

class Item
{
public:
    int itemId;
    string itemName;
    float price;

    Item(int id, string name, float p)
    {
        if (p < 0)
        {
            throw invalid_argument("Price cannot be negative");
        }

        itemId = id;
        itemName = name;
        price = p;
    }
};

class ShoppingCartSystem
{
private:
    vector<Item> items;

public:
    void addItem()
    {
        int id;
        string name;
        float price;

        cout << "Enter item ID: ";
        cin >> id;

        cin.ignore();

        cout << "Enter item name: ";
        getline(cin, name);

        cout << "Enter price: ";
        cin >> price;

        try
        {
            Item cart(id, name, price);
            items.push_back(cart);
            cout << "Item added successfully" << endl;
        }
        catch (exception &e)
        {
            cout << "Error: " << e.what() << '\n';
        }
    }

    void displayItems()
    {
        if (items.empty())
        {
            cout << "Your cart is empty." << endl;
            return;
        }

        cout << endl
             << "Items in Cart:" << endl;
        for (auto iterator : items)
        {
            cout << "ID: " << iterator.itemId
                 << ", Name: " << iterator.itemName
                 << ", Price: " << iterator.price << endl;
        }
    }

    void calculateBill()
    {
        if (items.empty())
        {
            cout << "Your cart is empty. Add at least one item." << endl;
            return;
        }

        float total = 0;

        for (auto i : items)
        {
            total += i.price;
        }

        cout << "Your total bill is " << total << endl;
    }
};

int main()
{
    ShoppingCartSystem cart;
    int choice;

    do
    {
        cout << endl
             << "------- Shopping Cart System -------" << endl;
        cout << "1. Add Item" << endl;
        cout << "2. Display Items" << endl;
        cout << "3. Calculate Total Bill" << endl;
        cout << "4. Exit" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cart.addItem();
            break;

        case 2:
            cart.displayItems();
            break;

        case 3:
            cart.calculateBill();
            break;

        case 4:
            cout << "Thank you for using our program." << endl
                 << "Exiting program..." << endl;
            break;

        default:
            cout << "Invalid choice! Try again" << endl;
            break;
        }
    } while (choice != 4);

    return 0;
}