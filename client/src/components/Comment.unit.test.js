import { screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../utils/utils-for-tests";
import Comment from "./Comment";

describe("Comment", () => {
  const initialState = { comment: { value: "" } };
  test("renders Comment component", () => {
    renderWithRedux(<Comment />, { initialState });
    screen.debug();
  });
  test("has a comment input", () => {
    renderWithRedux(<Comment />, { initialState });
    const comment = screen.getByLabelText("Comment");
    expect(comment).toBeInTheDocument();
  });
  test("has a comment input that can be typed into", async () => {
    renderWithRedux(<Comment />, { initialState });
    act(() => {
      userEvent.type(screen.getByLabelText("Comment"), "This is a comment");
    });
    expect(screen.getByLabelText("Comment")).toHaveValue("This is a comment");
  });
});
