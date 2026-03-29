package com.himanshumaurya0007.arrays;

import java.util.Scanner;

public class Array2DServices {

    public static void printArray(int[][] a) {
        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[0].length; j++) {
                System.out.print(a[i][j] + "\t");
            }
            System.out.println();
        }
    }

    public static void readArrayElements(int[][] a) {
        Scanner sc = new Scanner(System.in);

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[0].length; j++) {
                System.out.print("row, column (" + i + ", " + j + "). Enter data: ");
                a[i][j] = sc.nextInt();
            }
        }
    }

    public static int findMax(int[][] a) {
        int max = a[0][0];

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[0].length; j++) {
                if (a[i][j] > max)
                    max = a[i][j];
            }
        }
        return max;
    }

    public static int findMin(int[][] a) {
        int min = a[0][0];

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[0].length; j++) {
                if (a[i][j] < min)
                    min = a[i][j];
            }
        }
        return min;
    }

    public static int findSum(int[][] a) {
        int sum = 0;

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[0].length; j++) {
                sum += a[i][j];
            }
        }
        return sum;
    }

    public static int[] findSumRowWise(int[][] a) {
        int[] sumRowWise = new int[a.length];

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                sumRowWise[i] += a[i][j];
            }
        }
        return sumRowWise;
    }

    public static int[] findSumColumnWise(int[][] a) {
        int[] sumColumnWise = new int[a[0].length];

        for (int i = 0; i < a[0].length; i++) {
            for (int j = 0; j < a.length; j++) {
                sumColumnWise[i] += a[j][i];
            }
        }
        return sumColumnWise;
    }

    public static int[] findMaxRowWise(int[][] a) {
        int[] maxRowWise = new int[a.length];

        for (int i = 0; i < a.length; i++) {
            maxRowWise[i] = a[i][0];

            for (int j = 0; j < a[i].length; j++) {

                if (a[i][j] > maxRowWise[i])
                    maxRowWise[i] = a[i][j];
            }
        }
        return maxRowWise;
    }

    public static int[] findMaxColumnWise(int[][] a) {
        int[] maxColumnWise = new int[a[0].length];

        for (int i = 0; i < a[0].length; i++) {
            maxColumnWise[i] = a[0][i];

            for (int j = 0; j < a.length; j++) {

                if (a[j][i] > maxColumnWise[i])
                    maxColumnWise[i] = a[j][i];
            }
        }
        return maxColumnWise;
    }

    public static int[] findMinRowWise(int[][] a) {
        int[] minRowWise = new int[a.length];

        for (int i = 0; i < a.length; i++) {
            minRowWise[i] = a[i][0];

            for (int j = 0; j < a[i].length; j++) {

                if (a[i][j] < minRowWise[i])
                    minRowWise[i] = a[i][j];
            }
        }
        return minRowWise;
    }

    public static int[] findMinColumnWise(int[][] a) {
        int[] minColumnWise = new int[a[0].length];

        for (int i = 0; i < a[0].length; i++) {
            minColumnWise[i] = a[0][i];

            for (int j = 0; j < a.length; j++) {

                if (a[j][i] < minColumnWise[i])
                    minColumnWise[i] = a[j][i];
            }
        }
        return minColumnWise;
    }

    public static int[][] addMatrices(int[][] a, int[][] b) {

        if (a.length != b.length || a[0].length != b[0].length) {
            throw new IllegalArgumentException("Matrices must have same dimensions for addition.");
        }

        int[][] result = new int[a.length][a[0].length];

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                result[i][j] = a[i][j] + b[i][j];
            }
        }
        return result;
    }

    public static int[][] subtractMatrices(int[][] a, int[][] b) {

        if (a.length != b.length || a[0].length != b[0].length) {
            throw new IllegalArgumentException("Matrices must have same dimensions for subtraction.");
        }

        int[][] result = new int[a.length][a[0].length];

        for (int i = 0; i < a.length; i++) {
            for (int j = 0; j < a[i].length; j++) {
                result[i][j] = a[i][j] - b[i][j];
            }
        }
        return result;
    }
}
