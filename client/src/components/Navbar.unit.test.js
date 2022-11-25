// test navbar with router
import { screen, act } from "@testing-library/react";
import { renderWithRedux } from "../utils/utils-for-tests";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const initialState = { pourGroup: { value: [] } };
  test("renders Navbar component", () => {
    renderWithRedux(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      { initialState }
    );
    screen.debug();
  });
  test("has a logo", () => {
    renderWithRedux(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      { initialState }
    );
    const logo = screen.getAllByText("BREWMATE");
    expect(logo.length).toBe(2);
  });
  test("has a Home button", () => {
    renderWithRedux(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      { initialState }
    );
    const explore = screen.getAllByText("EXPLORE");
    expect(explore.length).toBe(2);
  });
  test("has a Pour History button", () => {
    renderWithRedux(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
      { initialState }
    );
    const post = screen.getAllByText("POST");
    expect(post.length).toBe(2);
  });
});
