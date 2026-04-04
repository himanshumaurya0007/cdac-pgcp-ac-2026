package com.himanshumaurya0007.test;

import com.himanshumaurya0007.model.Circle;
import com.himanshumaurya0007.model.Rectangle;
//import com.himanshumaurya0007.model.Shape;
import com.himanshumaurya0007.model.Triangle;

public class TestAll {
    public static void main(String[] args) {
/*
      As class is abstract so, we cannot create objects of it.
      Shape s = new Shape();
*/

        Triangle t1 = new Triangle();
        System.out.println(t1);
        System.out.println();

        Triangle t2 = new Triangle("red", 78.0f, 89.33f, 97.67f, 56.44f);
        System.out.println(t2);
        System.out.println();

        Circle c1 = new Circle();
        System.out.println(c1);
        System.out.println();

        Circle c2 = new Circle("blue", 77.81f);
        System.out.println(c2);
        System.out.println();

        Rectangle r1 = new Rectangle();
        System.out.println(r1);
        System.out.println();

        Rectangle r2 = new Rectangle("green", 98.34f, 93.10f);
        System.out.println(r2);
        System.out.println();
    }
}
