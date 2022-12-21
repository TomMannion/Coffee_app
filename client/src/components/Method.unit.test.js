import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Method from "./Method";

describe("Method", () => {
  const initialState = { method: { value: "" } };
  test("has a method input", () => {
    renderWithRedux(<Method />, { initialState });
    const method = screen.getByLabelText("Method");
    expect(method).toBeInTheDocument();
  });
  test("has a method input that can be typed into", async () => {
    renderWithRedux(<Method />, { initialState });
    const method = screen.getByLabelText("Method");
    act(() => {
      userEvent.type(method, "French Press");
    });
    expect(method).toHaveValue("French Press");
  });
});
