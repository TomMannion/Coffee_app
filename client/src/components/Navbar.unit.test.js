import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("renders Navbar component", () => {
    render(<Navbar />);
    screen.debug();
  });
  test("has a logo", () => {
    render(<Navbar />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
