import { screen } from "@testing-library/react";
import { renderWithRedux } from "../utils/utils-for-tests";
import Submit from "./Submit";

describe("Submit", () => {
  const initialState = { pourGroup: { value: [] } };
  test("renders Submit component", () => {
    renderWithRedux(<Submit />, { initialState });
    screen.debug();
  });
  test("has a Submit button", () => {
    renderWithRedux(<Submit />, { initialState });
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });
});
