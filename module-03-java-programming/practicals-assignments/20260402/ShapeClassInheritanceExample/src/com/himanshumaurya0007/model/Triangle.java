package com.himanshumaurya0007.model;

public class Triangle extends Shape {
    private float side1;
    private float side2;
    private float base;
    private float height;

    public Triangle() {
        System.out.println("In Triangle() constructor");
    }

    public Triangle(String color, float side1, float side2, float base, float height) {
        super(color);

        System.out.println("In Triangle() parameterised constructor");

        this.side1 = side1;
        this.side2 = side2;
        this.base = base;
        this.height = height;
    }

    public float getSide1() {
        return side1;
    }

    public void setSide1(float side1) {
        this.side1 = side1;
    }

    public float getSide2() {
        return side2;
    }

    public void setSide2(float side2) {
        this.side2 = side2;
    }

    public float getBase() {
        return base;
    }

    public void setBase(float base) {
        this.base = base;
    }

    public float getHeight() {
        return height;
    }

    public void setHeight(float height) {
        this.height = height;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "Triangle{" +
                "side1=" + side1 +
                ", side2=" + side2 +
                ", base=" + base +
                ", height=" + height +
                '}';
    }

    @Override
    public float calculateArea() {
        return (base * height) / 2;
    }

    @Override
    public float calculatePerimeter() {
        return side1 + side2 + base;
    }
}
