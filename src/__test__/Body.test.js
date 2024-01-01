import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/ApiResponse.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should fiter the restaurant card on the basis of search input", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByPlaceholderText("Search Restaurant");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  fireEvent.click(searchBtn);
  const resCard = screen.getAllByTestId("resCard");

  expect(resCard.length).toBe(3);
});

it("should filter the top rastaurants", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const topRateBtn = screen.getByRole("button", {
    name: "Top Rated Restarunt",
  });

  fireEvent.click(topRateBtn);

  const filterResCard = screen.getAllByTestId("resCard");

  expect(filterResCard.length).toBe(8);
});
