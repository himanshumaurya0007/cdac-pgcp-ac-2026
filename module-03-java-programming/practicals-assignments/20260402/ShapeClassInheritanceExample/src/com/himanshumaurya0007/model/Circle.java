package com.himanshumaurya0007.model;

public class Circle extends Shape {
    private final float PI = 3.142f;

    private float radius;

    public Circle() {
        System.out.println("In Circle() constructor");
    }

    public Circle(String color, float radius) {
        super(color);

        System.out.println("In Circle() parameterised constructor");

        this.radius = radius;
    }

    public float getRadius() {
        return radius;
    }

    public void setRadius(float radius) {
        this.radius = radius;
    }

    @Override
    public String toString() {
        return super.toString() + " is called by " + "Circle{" +
                "radius=" + radius +
                '}';
    }

    @Override
    public float calculateArea() {
        return PI * radius * radius;
    }

    @Override
    public float calculatePerimeter() {
        return 2 * PI * radius;
    }
}
