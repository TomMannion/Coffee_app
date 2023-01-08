import { render, screen, waitFor } from "@testing-library/react";
import CoffeeGroup from "./CoffeeGroup";
import axios from "axios";

jest.mock("./CoffeeCard");
// mock axios get request
jest.mock("axios");

describe("CoffeeGroup", () => {
  beforeEach(() => {
    axios.get.mockClear();
  });
  test("renders CoffeeGroup", async () => {
    const posts = { data: [{ title: "test" }] };
    axios.get.mockResolvedValueOnce(posts);
    render(<CoffeeGroup />);
    const coffeeGroup = await waitFor(() => screen.getByText("test"));
    expect(coffeeGroup).toBeInTheDocument();
  });
  test("renders multiple CoffeeGroup", async () => {
    const posts = { data: [{ title: "test" }, { title: "test" }] };
    axios.get.mockResolvedValueOnce(posts);
    render(<CoffeeGroup />);
    const coffeeGroup = await waitFor(() => screen.getAllByText("test"));
    expect(coffeeGroup.length).toBe(2);
  });
});
