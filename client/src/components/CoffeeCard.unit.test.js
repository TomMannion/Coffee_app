import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeCard from "./CoffeeCard";
// Mock Timer component
jest.mock("./Timer");

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
    origin: "Test Origin",
    tasteProfile: "20",
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
  test("can expand for more information - Timer", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const Time = screen.getAllByText("30s");
    const Pour = screen.getAllByText("100g");
    expect(Pour).toHaveLength(2);
    expect(Time).toHaveLength(2);
  });
  test("can expand for more information - Origin", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const Origin = screen.getByText("Origin: Test Origin");
    expect(Origin).toBeInTheDocument();
  });
  test("can expand for more information - TasteProfile", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const tasteProfile = screen.getByText("Taste profile: 20");
    expect(tasteProfile).toBeInTheDocument();
  });
  test("can expand for more information - Grinder", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const grinder = screen.getByText("Grinder: Hario Skerton");
    expect(grinder).toBeInTheDocument();
  });
});
