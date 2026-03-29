package com.himanshumaurya0007.arrays;

import java.util.Scanner;

public class TestArray2DServices {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int[][] matrix = new int[2][3];
        int choice;

        do {
            System.out.println(
                    "\n------- Menu Operations -------" +
                            "\n1. Display array" +
                            "\n2. Accept array" +
                            "\n3. Find max" +
                            "\n4. Find min" +
                            "\n5. Find sum" +
                            "\n6. Find sum row-wise" +
                            "\n7. Find sum column-wise" +
                            "\n8. Find max row-wise" +
                            "\n9. Find max column-wise" +
                            "\n10. Find min row-wise" +
                            "\n11. Find min column-wise" +
                            "\n12. Add two matrices" +
                            "\n13. Subtract two matrices" +
                            "\n14. Exit"
            );

            System.out.print("\nEnter your choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1 -> {
                    System.out.println("\nArray Elements:");
                    Array2DServices.printArray(matrix);
                }

                case 2 -> {
                    System.out.println("\nEnter elements:");
                    Array2DServices.readArrayElements(matrix);
                }

                case 3 -> {
                    int max = Array2DServices.findMax(matrix);
                    System.out.println("\nMaximum: " + max);
                }

                case 4 -> {
                    int min = Array2DServices.findMin(matrix);
                    System.out.println("\nMinimum: " + min);
                }

                case 5 -> {
                    int sum = Array2DServices.findSum(matrix);
                    System.out.println("\nTotal Sum: " + sum);
                }

                case 6 -> {
                    int[] rowSums = Array2DServices.findSumRowWise(matrix);
                    System.out.println("\nRow-wise Sum:");
                    for (int i = 0; i < rowSums.length; i++) {
                        System.out.println("Row " + i + ": " + rowSums[i]);
                    }
                }

                case 7 -> {
                    int[] colSums = Array2DServices.findSumColumnWise(matrix);
                    System.out.println("\nColumn-wise Sum:");
                    for (int i = 0; i < colSums.length; i++) {
                        System.out.println("Column " + i + ": " + colSums[i]);
                    }
                }

                case 8 -> {
                    int[] rowMax = Array2DServices.findMaxRowWise(matrix);
                    System.out.println("\nRow-wise Maximum:");
                    for (int i = 0; i < rowMax.length; i++) {
                        System.out.println("Row " + i + ": " + rowMax[i]);
                    }
                }

                case 9 -> {
                    int[] colMax = Array2DServices.findMaxColumnWise(matrix);
                    System.out.println("\nColumn-wise Maximum:");
                    for (int i = 0; i < colMax.length; i++) {
                        System.out.println("Column " + i + ": " + colMax[i]);
                    }
                }

                case 10 -> {
                    int[] rowMin = Array2DServices.findMinRowWise(matrix);
                    System.out.println("\nRow-wise Minimum:");
                    for (int i = 0; i < rowMin.length; i++) {
                        System.out.println("Row " + i + ": " + rowMin[i]);
                    }
                }

                case 11 -> {
                    int[] colMin = Array2DServices.findMinColumnWise(matrix);
                    System.out.println("\nColumn-wise Minimum:");
                    for (int i = 0; i < colMin.length; i++) {
                        System.out.println("Column " + i + ": " + colMin[i]);
                    }
                }

                case 12 -> {
                    int[][] matrix2 = new int[matrix.length][matrix[0].length];

                    System.out.println("\nEnter elements for second matrix:");
                    Array2DServices.readArrayElements(matrix2);

                    int[][] result = Array2DServices.addMatrices(matrix, matrix2);

                    System.out.println("\nResultant Matrix (Addition):");
                    Array2DServices.printArray(result);
                }

                case 13 -> {
                    int[][] matrix2 = new int[matrix.length][matrix[0].length];

                    System.out.println("\nEnter elements for second matrix:");
                    Array2DServices.readArrayElements(matrix2);

                    int[][] result = Array2DServices.subtractMatrices(matrix, matrix2);

                    System.out.println("\nResultant Matrix (Subtraction):");
                    Array2DServices.printArray(result);
                }

                case 14 -> System.out.println("\nThank you for using our services.");

                default -> System.out.println("\nInvalid input! Please try again.");
            }

        } while (choice != 14);

        sc.close();
    }
}