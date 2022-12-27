import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeCard from "./CoffeeCard";
// Mock Timer component
jest.mock("./Timer", () => {
  return function Timer() {
    return <div data-testid="timer">Timer</div>;
  };
});

// pass in props to CoffeeCard
const props = {
  post: {
    title: "Test Title",
    image: "https://www.google.com",
    brewMethod: "French Press",
    pourGroup: [
      { pour: "100", time: "30" },
      { pour: "100", time: "30" },
    ],
    coffeeWeight: "20",
    method: "This is a method",
    grinder: "Hario Skerton",
    comment: "This is a comment",
  },
};

describe("CoffeeCard", () => {
  test("has a title", () => {
    render(<CoffeeCard {...props} />);
    const Title = screen.getByText("Test Title");
    expect(Title).toBeInTheDocument();
  });
  test("has a comment", () => {
    render(<CoffeeCard {...props} />);
    const Comment = screen.getByText("This is a comment");
    expect(Comment).toBeInTheDocument();
  });
  test("has a button to expand information", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    expect(Expand).toBeInTheDocument();
  });
  test("can expand for more information - method", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const Method = screen.getByText("Method: This is a method");
    expect(Method).toBeInTheDocument();
  });
  test("can expand for more information - brew time", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const AmountOfCoffee = screen.getByText("Amount of Coffee: 20g");
    expect(AmountOfCoffee).toBeInTheDocument();
  });

  test("can shrink for less information", async () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    await waitFor(() => {
      const Method = screen.getByText("Method: This is a method");
      expect(Method).toBeInTheDocument();
    });
    act(() => {
      userEvent.click(Expand);
    });
    await waitFor(() => {
      const Method = screen.queryByText("Method: This is a method");
      expect(Method).not.toBeInTheDocument();
    });
  });
});
