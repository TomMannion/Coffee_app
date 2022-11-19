import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Grinder from "./Grinder";

describe("Grinder", () => {
  const initialState = { grinder: { value: "" } };
  test("renders Grinder component", () => {
    renderWithRedux(<Grinder />, { initialState });
    screen.debug();
  });
  test("has a grinder input", () => {
    renderWithRedux(<Grinder />, { initialState });
    const grinder = screen.getByPlaceholderText("Grinder");
    expect(grinder).toBeInTheDocument();
  });
  test("has a grinder input that can be typed into", async () => {
    renderWithRedux(<Grinder />, { initialState });
    act(() => {
      userEvent.type(screen.getByPlaceholderText("Grinder"), "Hario Skerton");
    });
    expect(screen.getByPlaceholderText("Grinder")).toHaveValue("Hario Skerton");
  });
});
