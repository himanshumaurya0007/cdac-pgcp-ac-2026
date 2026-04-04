package com.himanshumaurya0007.model;

public class Rectangle extends Shape {
    private float length;
    private float breadth;

    public Rectangle() {
        System.out.println("In Rectangle() constructor");
    }

    public Rectangle(String color, float length, float breadth) {
        super(color);

        System.out.println("In Rectangle() parameterised constructor");

        this.length = length;
        this.breadth = breadth;
    }

    public float getLength() {
        return length;
    }

    public void setLength(float length) {
        this.length = length;
    }

    public float getBreadth() {
        return breadth;
    }

    public void setBreadth(float breadth) {
        this.breadth = breadth;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "Rectangle{" +
                "length=" + length +
                ", breadth=" + breadth +
                '}';
    }

    @Override
    public float calculateArea() {
        return length * breadth;
    }

    @Override
    public float calculatePerimeter() {
        return 2 * (length + breadth);
    }
}
