import { render, screen } from "@testing-library/react";
import Content from "./Content";

// mock child component
jest.mock("./Roaster", () => () => <div> Roaster </div>);

describe("Content", () => {
  test("has a title", () => {
    render(<Content />);
    const title = screen.getByText("Coffee App");
    expect(title).toBeInTheDocument();
  });
  test("has a form", () => {
    render(<Content />);
    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  test("has a roaster input", () => {
    render(<Content />);
    const roaster = screen.getByText("Roaster");
    expect(roaster).toBeInTheDocument();
  });
});
