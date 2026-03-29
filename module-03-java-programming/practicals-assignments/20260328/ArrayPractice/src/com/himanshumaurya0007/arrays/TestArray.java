package com.himanshumaurya0007.arrays;

import java.util.Scanner;

public class TestArray {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int[] numbers = new int[5];

        // Input
        System.out.println("Enter 5 numbers:");
        ArrayServices.readArrayElements(numbers);

        // Display
        System.out.print("\nArray elements: ");
        ArrayServices.printArray(numbers);

        // Search
        System.out.print("\n\nEnter element to find: ");
        int target = scanner.nextInt();
        int index = ArrayServices.findIndex(numbers, target);

        if (index == -1) {
            System.out.println("Element not found in the array.");
        } else {
            System.out.println("Element found at index: " + index);
        }

        // Sum
        int sum = ArrayServices.calculateSum(numbers);
        System.out.println("\nSum: " + sum);

        // Max & Min
        int maxValue = ArrayServices.findMax(numbers);
        int minValue = ArrayServices.findMin(numbers);

        System.out.println("\nMaximum value: " + maxValue);
        System.out.println("Minimum value: " + minValue);

        // Sum of digits array
        int[] digitSums = ArrayServices.sumOfDigitsArray(numbers);

        System.out.print("\nSum of digits for each element: ");
        for (int i = 0; i < digitSums.length; i++) {
            System.out.print(digitSums[i] + "\t");
        }

        scanner.close();
    }
}