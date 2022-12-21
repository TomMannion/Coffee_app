import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Origin from "./Origin";

describe("Origin", () => {
  const initialState = { origin: { value: "" } };
  test("has an origin input", () => {
    renderWithRedux(<Origin />, { initialState });
    // get by label text
    const origin = screen.getByLabelText("Coffee Origin");
    expect(origin).toBeInTheDocument();
  });
  test("has an origin input that can be typed into", async () => {
    renderWithRedux(<Origin />, { initialState });
    act(() => {
      userEvent.type(screen.getByLabelText("Coffee Origin"), "Kenya");
    });
    expect(screen.getByLabelText("Coffee Origin")).toHaveValue("Kenya");
  });
});
