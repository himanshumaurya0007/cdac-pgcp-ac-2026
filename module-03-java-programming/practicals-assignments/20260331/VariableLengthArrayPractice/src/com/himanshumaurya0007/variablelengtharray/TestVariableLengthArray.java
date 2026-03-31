package com.himanshumaurya0007.variablelengtharray;

import java.util.stream.Stream;

public class TestVariableLengthArray {
    public static void main(String[] args) {

        int[][] arr = new int[3][];

        VariableLengthArrayServices.readArrayElements(arr);

        System.out.println("\nArray Elements: ");
        VariableLengthArrayServices.printArray(arr);

        int[] minRowWise = VariableLengthArrayServices.findMinRowWise(arr);

        System.out.println("\n------- Row-wise Minimum (Using traditional for loop) -------");
        for (int i = 0; i < minRowWise.length; i++) {
            System.out.println("Minimum of row " + i + ": " + minRowWise[i]);
        }

        System.out.println("\n------- Row-wise Minimum (Using enhanced for loop) -------");
        int rowIndex = 0;
        for (int value : minRowWise) {
            System.out.println("Minimum of row " + rowIndex++ + ": " + value);
        }

        System.out.println("\n------- Row-wise Minimum (Using Stream API) -------");
        for (int i = 0; i < minRowWise.length; i++) {
            final int index = i;
            Stream.of(minRowWise[i])
                    .forEach(val -> System.out.println("Minimum of row " + index + ": " + val));
        }


        int[] minColumnWise = VariableLengthArrayServices.findMinColumnWise(arr);

        System.out.println("\n------- Column-wise Minimum (Using traditional for loop) -------");
        for (int i = 0; i < minColumnWise.length; i++) {
            System.out.println("Minimum of column " + i + ": " + minColumnWise[i]);
        }

        System.out.println("\n------- Column-wise Minimum (Using enhanced for loop) -------");
        int colIndex = 0;
        for (int value : minColumnWise) {
            System.out.println("Minimum of column " + colIndex++ + ": " + value);
        }

        System.out.println("\n------- Column-wise Minimum (Using Stream API) -------");
        for (int i = 0; i < minColumnWise.length; i++) {
            final int index = i;
            Stream.of(minColumnWise[i])
                    .forEach(val -> System.out.println("Minimum of column " + index + ": " + val));
        }


        // Valid Syntax
        int[][][] array3D_1 = new int[3][][];
        int[][][] array3D_2 = new int[3][4][];
        int[][][] array3D_3 = new int[3][4][5];

        // Invalid Syntax (ERROR)
        // int[][][] array3D_11 = new int[][][];
        // int[][][] array3D_12 = new int[][4][5];
        // int[][][] array3D_13 = new int[][][5];
        // int[][][] array3D_14 = new int[3][][5];
    }
}