import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../components/Header";
import stateStore from "../store/store";
import "@testing-library/jest-dom";

describe("first describe block", () => {
  it("should render the header component", () => {
    render(
      <BrowserRouter>
        <Provider store={stateStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const contact = screen.getByText("Contact");
    // const loginButton = screen.getByRole("button",{name : "login"})

    // Assertion
    expect(contact).toBeInTheDocument();
  });

  it("should render the header component with cart", () => {
    render(
      <BrowserRouter>
        <Provider store={stateStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cart = screen.getByText(/Cart/);

    // Assertion
    expect(cart).toBeInTheDocument();
  });

  it("should fire the event to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={stateStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
