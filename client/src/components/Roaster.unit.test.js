import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Roaster from "./Roaster";

describe("Roaster", () => {
  test("renders Roaster component", () => {
    renderWithRedux(<Roaster />);
    screen.debug();
  });
  test("has a roaster input", () => {
    renderWithRedux(<Roaster />);
    const roaster = screen.getByPlaceholderText("Enter a coffee roaster");
    expect(roaster).toBeInTheDocument();
  });
  test("has a roaster input that can be typed into", async () => {
    renderWithRedux(<Roaster />);
    act(() => {
      userEvent.type(
        screen.getByPlaceholderText("Enter a coffee roaster"),
        "Kafi"
      );
    });
    expect(screen.getByPlaceholderText("Enter a coffee roaster")).toHaveValue(
      "Kafi"
    );
  });
});
