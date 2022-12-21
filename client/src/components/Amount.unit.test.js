import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import Amount from "./Amount";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = {
  amount: { amount: { value: "" } },
};

describe("Amount", () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  test("if amount input exists", () => {
    render(<Amount />);
    const amount = screen.getByRole("textbox");
    expect(amount).toBeInTheDocument();
  });
  test("if amount input can be typed into", async () => {
    render(<Amount />);
    const amount = screen.getByRole("textbox");
    act(() => {
      userEvent.type(amount, "1");
    });
    expect(amount).toHaveValue("1");
  });
});
