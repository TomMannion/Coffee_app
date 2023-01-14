import { screen, act, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as reactRedux from "react-redux";
import BrewMethod from "./BrewMethod";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = {
  brewMethod: { brewMethod: { value: "" } },
};

describe("BrewMethod", () => {
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

  test("test if Aeropress exists", () => {
    render(<BrewMethod />);
    const aeropress = screen.getByText("Aeropress");
    expect(aeropress).toBeInTheDocument();
  });
});
