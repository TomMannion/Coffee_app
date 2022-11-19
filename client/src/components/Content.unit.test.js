import { render, screen } from "@testing-library/react";
import Content from "./Content";

describe("Content", () => {
  test("renders Content component", () => {
    render(<Content />);
    screen.debug();
  });
  test("has a title", () => {
    render(<Content />);
    const title = screen.getByText("Coffee App");
    expect(title).toBeInTheDocument();
  });
  test("can enter a coffee roaster", () => {
    render(<Content />);
    const input = screen.getByPlaceholderText("Enter a coffee roaster");
    expect(input).toBeInTheDocument();
  });
});
