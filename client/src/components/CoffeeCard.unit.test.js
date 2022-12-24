import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoffeeCard from "./CoffeeCard";
// pass in props to CoffeeCard

const props = {
  post: {
    title: "Test Title",
    image: "https://www.google.com",
    brewMethod: "French Press",
    method: "French Press",
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
});
