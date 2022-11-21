import { screen } from "@testing-library/react";
import { renderWithRedux } from "../utils/utils-for-tests";
import Submit from "./Submit";
import mockAxios from "axios";

describe("Submit", () => {
  const initialState = { pourGroup: { value: [] } };
  test("renders Submit component", () => {
    renderWithRedux(<Submit />, { initialState });
    screen.debug();
  });
  test("has a Submit button", () => {
    renderWithRedux(<Submit />, { initialState });
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });
  test("should submit a post request on click", async () => {
    const { store } = renderWithRedux(<Submit />, { initialState });
    // mock the post request
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          pourGroup: {
            value: [
              {
                grindSize: "Medium",
                amount: "12g",
                time: "1:00",
                temperature: "200F",
              },
            ],
          },
        },
      })
    );

    // click the submit button
    userEvent.click(screen.getByText("Submit"));
    // get the state from the store
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
