import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import GrindSize from "./GrindSize";

describe("GrindSize", () => {
  const initialState = { grindSize: { value: "" } };
  test("renders GrindSize component", () => {
    renderWithRedux(<GrindSize />, { initialState });
    screen.debug();
  });
  test("has a grindSize input", () => {
    renderWithRedux(<GrindSize />, { initialState });
    const grindSize = screen.getByLabelText("Grind Size");
    expect(grindSize).toBeInTheDocument();
  });
  test("has a grindSize input that can be typed into", async () => {
    renderWithRedux(<GrindSize />, { initialState });
    act(() => {
      userEvent.type(screen.getByLabelText("Grind Size"), "Medium");
    });
    expect(screen.getByLabelText("Grind Size")).toHaveValue("Medium");
  });
});
