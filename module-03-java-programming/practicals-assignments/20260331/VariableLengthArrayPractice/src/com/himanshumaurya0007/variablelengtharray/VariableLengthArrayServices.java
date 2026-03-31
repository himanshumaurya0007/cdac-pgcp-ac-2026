package com.himanshumaurya0007.variablelengtharray;

import java.util.Scanner;

public class VariableLengthArrayServices {
    public static void readArrayElements(int[][] a) {
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < a.length; i++) {
            System.out.print("\nEnter number of columns: ");
            int column = sc.nextInt();

//            Allocate memory for ith row
            a[i] = new int[column];

//            Accept elements for ith row
            for (int j = 0; j < a[i].length; j++) {
                System.out.print("For row, column (" + i + "," + j + "). Enter element: ");
                a[i][j] = sc.nextInt();
            }
        }
    }


    public static void printArray(int[][] a) {
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                System.out.print(a[i][j] + "\t");
            }
            System.out.println();
        }
    }

    public static int[] findMinRowWise(int[][] a) {
        int[] minimumValue = new int[a.length];

        for (int i = 0; i < a.length; i++) {
            minimumValue[i] = a[i][0];

            for (int j = 1; j < a[i].length; j++) {
                if (a[i][j] < minimumValue[i]) {
                    minimumValue[i] = a[i][j];
                }
            }
        }
        return minimumValue;
    }

    /**
     * Computes the minimum value for each column in a jagged (variable-length) 2D array.
     *
     * <p>A jagged array means each row can have a different number of columns.
     * This method safely traverses such an array and determines the minimum value
     * column-wise by considering only valid elements.</p>
     *
     * <p><b>Approach:</b></p>
     * <ul>
     *     <li>Step 1: Determine the maximum number of columns across all rows.</li>
     *     <li>Step 2: For each column:
     *         <ul>
     *             <li>Find the first row that contains this column.</li>
     *             <li>Initialize the minimum value using that element.</li>
     *             <li>Traverse remaining rows and update the minimum if a smaller value is found.</li>
     *         </ul>
     *     </li>
     * </ul>
     *
     * <p><b>Important:</b> Since this is a jagged array, always check
     * <code>column &lt; a[row].length</code> before accessing elements.</p>
     *
     * @param a the input jagged 2D array
     * @return an array containing the minimum value of each column
     * @throws ArrayIndexOutOfBoundsException if no valid row exists for a column (edge case)
     */

    public static int[] findMinColumnWise(int[][] a) {

        // Step 1: Find maximum column length among all rows
        int maxLength = a[0].length;
        for (int i = 1; i < a.length; i++) {
            if (maxLength < a[i].length) {
                maxLength = a[i].length;
            }
        }

        System.out.println("\nMaximum length: " + maxLength);

        // Array to store minimum values for each column
        int[] minValue = new int[maxLength];

        // Step 2: Traverse column-wise
        for (int column = 0; column < maxLength; column++) {

            int rowNumber = 0;

            // Find first valid row that contains this column
            while (column >= a[rowNumber].length) {
                rowNumber++;
            }

            System.out.println("\nFor column " + column + ", first row: " + rowNumber);

            // Initialize minimum value using first valid element
            minValue[column] = a[rowNumber][column];

            // Compare with remaining rows
            for (int row = rowNumber + 1; row < a.length; row++) {
                System.out.println("For column: " + column + ", row: " + row);

                // Ensure column exists in current row before accessing
                if ((column < a[row].length) && (minValue[column] > a[row][column])) {
                    minValue[column] = a[row][column];
                }
            }
        }
        return minValue;
    }
}
