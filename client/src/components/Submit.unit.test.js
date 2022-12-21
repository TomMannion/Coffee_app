import { render, screen } from "@testing-library/react";
import * as reactRedux from "react-redux";
import Submit from "./Submit";
import axios from "axios";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("axios", () => ({
  ...jest.requireActual("axios"),
  post: jest.fn(),
}));

const mockStore = {
  roaster: { value: "roaster" },
  origin: { value: "origin" },
  grinder: { value: "grinder" },
  grindSize: { value: "grindSize" },
  brewMethod: { value: "brewMethod" },
  addPour: { value: "addPour" },
  pourGroup: { value: [] },
  method: { value: "method" },
  comment: { value: "comment" },
  slider: { value: "slider" },
  submit: { value: "submit" },
  amount: { value: "amount" },
  waterTemp: { value: "waterTemp" },
  title: { value: "title" },
};

describe("Submit", () => {
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

  test("has a submit button", () => {
    render(<Submit />);
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });
  test("has a submit button that can be clicked", async () => {
    render(<Submit />);
    const submit = screen.getByText("Submit");
    submit.click();
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:3500/posts/create",
      {
        brewMethod: "brewMethod",
        coffeeWeight: "amount",
        comment: "comment",
        grindSize: "grindSize",
        grinder: "grinder",
        image: "https://picsum.photos/200",
        method: "method",
        origin: "origin",
        pourGroup: [],
        roaster: "roaster",
        tasteProfile: "slider",
        title: "title",
        waterTemp: "waterTemp",
      }
    );
  });
});
