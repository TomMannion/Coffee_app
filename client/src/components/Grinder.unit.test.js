import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Grinder from "./Grinder";

describe("Grinder", () => {
  const initialState = { grinder: { value: "" } };
  test("has a grinder input", () => {
    renderWithRedux(<Grinder />, { initialState });
    const grinder = screen.getByLabelText("Grinder");
    expect(grinder).toBeInTheDocument();
  });
  test("has a grinder input that can be typed into", async () => {
    renderWithRedux(<Grinder />, { initialState });
    act(() => {
      userEvent.type(screen.getByLabelText("Grinder"), "Hario Skerton");
    });
    expect(screen.getByLabelText("Grinder")).toHaveValue("Hario Skerton");
  });
});
