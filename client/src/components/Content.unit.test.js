import { render, screen } from "@testing-library/react";
import Content from "./Content";

// mock child component
jest.mock("./Roaster", () => () => <div> Roaster </div>);
jest.mock("./Origin", () => () => <div> Origin </div>);
jest.mock("./Grinder", () => () => <div> Grinder </div>);
jest.mock("./GrindSize", () => () => <div> GrindSize </div>);
jest.mock("./BrewMethod", () => () => <div> BrewMethod </div>);
jest.mock("./AddPour", () => () => <div> AddPour </div>);
jest.mock("./PourGroup", () => () => <div> PourGroup </div>);
jest.mock("./Comment", () => () => <div> Comment </div>);
jest.mock("./Submit", () => () => <div> Submit </div>);
jest.mock("./Amount", () => () => <div> Amount </div>);
jest.mock("./WaterTemp", () => () => <div> WaterTemp </div>);

describe("Content", () => {
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
  test("has a brewMethod input", () => {
    render(<Content />);
    const brewMethod = screen.getByText("BrewMethod");
    expect(brewMethod).toBeInTheDocument();
  });
  test("has an addPour button", () => {
    render(<Content />);
    const addPour = screen.getByText("AddPour");
    expect(addPour).toBeInTheDocument();
  });
  test("has a pourGroup input", () => {
    render(<Content />);
    const pourGroup = screen.getByText("PourGroup");
    expect(pourGroup).toBeInTheDocument();
  });
  test("has a comment input", () => {
    render(<Content />);
    const comment = screen.getByText("Comment");
    expect(comment).toBeInTheDocument();
  });
  test("has a submit button", () => {
    render(<Content />);
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });
  test("has an amount input", () => {
    render(<Content />);
    const amount = screen.getByText("Amount");
    expect(amount).toBeInTheDocument();
  });
  test("has a waterTemp input", () => {
    render(<Content />);
    const waterTemp = screen.getByText("WaterTemp");
    expect(waterTemp).toBeInTheDocument();
  });
});
