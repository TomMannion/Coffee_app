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
  test("test if Chemex exists", () => {
    render(<BrewMethod />);
    const chemex = screen.getByText("Chemex");
    expect(chemex).toBeInTheDocument();
  });
  test("test if V60 exists", () => {
    render(<BrewMethod />);
    const V60 = screen.getByText("V60");
    expect(V60).toBeInTheDocument();
  });
  test("test if French Press exists", () => {
    render(<BrewMethod />);
    const frenchPress = screen.getByText("French Press");
    expect(frenchPress).toBeInTheDocument();
  });
  test("test if Cold Brew exists", () => {
    render(<BrewMethod />);
    const coldBrew = screen.getByText("Cold Brew");
    expect(coldBrew).toBeInTheDocument();
  });
});
