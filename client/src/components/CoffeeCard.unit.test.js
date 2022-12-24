import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeCard from "./CoffeeCard";
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
  test("can expand for more information", () => {
    render(<CoffeeCard {...props} />);
    const Expand = screen.getByLabelText("show more");
    act(() => {
      userEvent.click(Expand);
    });
    const Method = screen.getByText("Method: This is a method");
    expect(Method).toBeInTheDocument();
  });
});
