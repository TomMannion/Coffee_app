import { screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Origin from "./Origin";

const initialState = { origin: { value: "" } };

describe("Origin", () => {
  test("has a origin input", () => {
    renderWithRedux(<Origin />, { initialState });
    const origin = screen.getByPlaceholderText("Coffee Origin");
    expect(origin).toBeInTheDocument();
  });
  test("has a origin input that can be typed into", async () => {
    renderWithRedux(<Origin />, { initialState });
    act(() => {
      userEvent.type(screen.getByPlaceholderText("Coffee Origin"), "Kenya");
    });
    expect(screen.getByPlaceholderText("Coffee Origin")).toHaveValue("Kenya");
  });
});
