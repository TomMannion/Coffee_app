import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import AddPour from "./AddPour";

describe("AddPour", () => {
  const initialState = { pourGroup: { value: [] } };
  test("renders AddPour component", () => {
    renderWithRedux(<AddPour />, { initialState });
    screen.debug();
  });
  test("has an Add Pour button", () => {
    renderWithRedux(<AddPour />, { initialState });
    const addPour = screen.getByText("Add Pour");
    expect(addPour).toBeInTheDocument();
  });
  test("clicking Add Pour should increment the state", async () => {
    const { store } = renderWithRedux(<AddPour />, { initialState });
    act(() => {
      userEvent.click(screen.getByText("Add Pour"));
    });
    // get the state from the store
    const { pourGroup } = store.getState();
    expect(pourGroup.value.length).toBe(1);
  });
});
