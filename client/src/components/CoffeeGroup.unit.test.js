import { render, screen, waitFor } from "@testing-library/react";
import CoffeeGroup from "./CoffeeGroup";
import * as axios from "axios";

jest.mock("./CoffeeCard");
// mock axios get request
jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  // mock axios get request with data
  get: jest.fn(() => Promise.resolve({ data: [{ title: "test" }] })),
}));

describe("CoffeeGroup", () => {
  test("can correctly run axios.get on useEffect load", () => {
    render(<CoffeeGroup />);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
  test("has a coffee group that can be typed into", async () => {
    render(<CoffeeGroup />);
    // wait for axios to resolve
    await waitFor(() => {
      expect(screen.getByText("test")).toBeInTheDocument();
    });
  });
});
