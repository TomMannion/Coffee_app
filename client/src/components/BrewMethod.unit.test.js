import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import BrewMethod from "./BrewMethod";

describe("BrewMethod", () => {
  const initialState = { brewMethod: { value: "" } };
  test("renders BrewMethod component", () => {
    renderWithRedux(<BrewMethod />, { initialState });
    screen.debug();
  });
  test("has a brewMethod input", () => {
    renderWithRedux(<BrewMethod />, { initialState });
    const brewMethod = screen.getByLabelText("Brew Method");
    expect(brewMethod).toBeInTheDocument();
  });
  test("has a brewMethod input that can be typed into", async () => {
    renderWithRedux(<BrewMethod />, { initialState });
    const brewMethod = screen.getByLabelText("Brew Method");
    act(() => {
      userEvent.type(brewMethod, "French Press");
    });
    expect(brewMethod).toHaveValue("French Press");
  });
});
