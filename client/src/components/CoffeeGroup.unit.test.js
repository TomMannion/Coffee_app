import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeGroup from "./CoffeeGroup";
import * as axios from "axios";

jest.mock("./CoffeeCard");
jest.mock("axios");

describe("CoffeeGroup", () => {
  test("can correctly run axios.get on useEffect load", () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ title: "test" }] })
    );
    render(<CoffeeGroup />);
    // expect axios to have been called with the correct url
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3500/posts/all");
    // expect axios to have been called once
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test("has a coffee group that can be typed into", async () => {
    axios.get.mockImplementation(() =>
      Promise.resolve({ data: [{ title: "test" }] })
    );
    // wrap in act to avoid warning
    render(<CoffeeGroup />);
    // wait for axios to resolve
    await waitFor(() => {
      expect(screen.getByText("test")).toBeInTheDocument();
    });
  });
});
