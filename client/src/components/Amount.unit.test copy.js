import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Amount from "./Amount";

describe("Amount", () => {
  const initialState = { Amount: { value: "" } };
  test("renders Amount component", () => {
    renderWithRedux(<Amount />, { initialState });
    screen.debug();
  });
  test("has a Amount input", () => {
    renderWithRedux(<Amount />, { initialState });
    const Amount = screen.getByLabelText("Amount of Coffee");
    expect(Amount).toBeInTheDocument();
  });
  test("has a Amount input that can be typed into", async () => {
    renderWithRedux(<Amount />, { initialState });
    const Amount = screen.getByLabelText("Amount of Coffee");
    act(() => {
      userEvent.type(Amount, "12g");
    });
    expect(Amount).toHaveValue("12g");
  });
});
