package com.himanshumaurya0007.model;

public abstract class Shape {
    private String color;

    public Shape() {
        System.out.println("In Shape() constructor");
    }

    public Shape(String color) {
        System.out.println("In Shape() parameterised constructor");

        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public String toString() {
        return "Shape{" +
                "color='" + color + '\'' +
                '}';
    }

    public abstract float calculateArea();

    public abstract float calculatePerimeter();

}
