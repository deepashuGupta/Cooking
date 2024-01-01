const { render, screen, fireEvent } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import ResMenu from "../components/ResMenu/ResMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_MENU from "../mocks/MenuData.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import stateStore from "../store/store";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU);
    },
  });
});

it("sholud check menu of restaurant is Rendered or not", async () => {
  await act(() => {
    render(
      <Provider store={stateStore}>
        <ResMenu />
      </Provider>
    );
  });

  const accordianHeader = screen.getByText(
    "New Year & Christmas Party Catering(5)"
  );

  fireEvent.click(accordianHeader);

  const menuItems = screen.getAllByTestId("menuItems");

  expect(menuItems.length).toBe(5);
});

it("should check the cart functionality", async () => {
  await act(() => {
    render(
      <BrowserRouter>
        <Provider store={stateStore}>
          <Header />
          <ResMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordianHeader = screen.getByText(
    "New Year & Christmas Party Catering(5)"
  );

  fireEvent.click(accordianHeader);

  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtn[0]);
  fireEvent.click(addBtn[2]);

  const cartItems = screen.getByTestId("cartItems");

  expect(cartItems.textContent).toBe("2");

  const menuItems = screen.getAllByTestId("menuItems");

  expect(menuItems.length).toBe(7);

  const deleteBtn = screen.getAllByRole("button", { name: "Delete" });

  fireEvent.click(deleteBtn[0]);
  fireEvent.click(deleteBtn[1]);

  const menuItems1 = screen.getAllByTestId("menuItems");

  expect(menuItems1.length).toBe(5);
});
