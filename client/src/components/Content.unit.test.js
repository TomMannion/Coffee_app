import { render, screen } from "@testing-library/react";
import Content from "./Content";

// mock child component
jest.mock("./Roaster", () => () => <div> Roaster </div>);
jest.mock("./Origin", () => () => <div> Origin </div>);
jest.mock("./Grinder", () => () => <div> Grinder </div>);
jest.mock("./GrindSize", () => () => <div> GrindSize </div>);

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
  test("has an origin input", () => {
    render(<Content />);
    const origin = screen.getByText("Origin");
    expect(origin).toBeInTheDocument();
  });
  test("has a grinder input", () => {
    render(<Content />);
    const grinder = screen.getByText("Grinder");
    expect(grinder).toBeInTheDocument();
  });
  test("has a grindSize input", () => {
    render(<Content />);
    const grindSize = screen.getByText("GrindSize");
    expect(grindSize).toBeInTheDocument();
  });
});
