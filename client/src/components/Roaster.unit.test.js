import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Roaster from "./Roaster";

const initialState = { roaster: { value: "" } };

describe("Roaster", () => {
  test("has a roaster input", () => {
    renderWithRedux(<Roaster />, { initialState });
    const roaster = screen.getByPlaceholderText("Enter a coffee roaster");
    expect(roaster).toBeInTheDocument();
  });
  test("has a roaster input that can be typed into", async () => {
    renderWithRedux(<Roaster />, { initialState });
    act(() => {
      userEvent.type(
        screen.getByPlaceholderText("Enter a coffee roaster"),
        "Blue Bottle"
      );
    });
    expect(screen.getByPlaceholderText("Enter a coffee roaster")).toHaveValue(
      "Blue Bottle"
    );
  });
});
