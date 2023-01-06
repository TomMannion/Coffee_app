import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import Slider from "./Slider";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = {
  slider: { slider: { value: "" } },
};

describe("Slider", () => {
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

  test("if Slider input exists", () => {
    render(<Slider />);
    const taste = screen.getByRole("slider");
    expect(taste).toBeInTheDocument();
  });
  test("if Slider can be moved with mouse", () => {
    render(<Slider />);
    const taste = screen.getByRole("slider");
    act(() => {
      // click and drag down
      userEvent.click(taste, { clientX: 0, clientY: 1 });
    });
    expect(taste).toHaveValue("0");
  });
  // test if keyboard can change slider value
});
