import { screen, render } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("Should Contact Component Render", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  const button = screen.getByRole("button");
  // Assertions
  expect(button).toBeInTheDocument();
  expect(heading).toBeInTheDocument();
});

test("Should Contact have 2 placeholder", () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText("name");
  const messageInput = screen.getByPlaceholderText("message");

  expect(nameInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
});
