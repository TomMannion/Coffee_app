import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import WaterTemp from "./WaterTemp";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = {
  waterTemp: { waterTemp: { temp: "" } },
};

describe("WaterTemp", () => {
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

  test("if WaterTemp input exists", () => {
    render(<WaterTemp />);
    const temp = screen.getByRole("textbox");
    expect(temp).toBeInTheDocument();
  });
  test("if WaterTemp input can be typed into", async () => {
    render(<WaterTemp />);
    const temp = screen.getByRole("textbox");
    act(() => {
      userEvent.type(temp, "1");
    });
    expect(temp).toHaveValue("1");
  });
});
