import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CarInput from "./CarInput";

describe("Given a make form", () => {
  test("When a user types BMW into the form it will show on screen", () => {
    render(<CarInput />);
    let manufacturerInput = screen.getByLabelText("make");

    expect(manufacturerInput).toBeInTheDocument();
  });

  test("When a user types the model of the car, it will show on the screen", () => {
    render(<CarInput />);

    let modelInput = screen.getByLabelText("model");

    expect(modelInput).toBeInTheDocument();
  });

  test("When a user types the color of a car, it will show on screen", () => {
    render(<CarInput />);

    let modelInput = screen.getByLabelText("color");

    expect(modelInput).toBeInTheDocument();
  });

  test("When a user pastes the URL of an image of a car, it will show on screen", () => {
    render(<CarInput />);

    let modelInput = screen.getByLabelText("car-url");

    expect(modelInput).toBeInTheDocument();
  });
});
