import { render, screen } from "@testing-library/react";
import ResCard from "../components/ResCard";
import { isNewlyAdded } from "../components/ResCard";
import RES_MOCK from "../mocks/ResCard.json";
import "@testing-library/jest-dom";

it("should render the Restaurant Card", () => {
  render(<ResCard resData={RES_MOCK} />);

  const resName = screen.getByText("KFC");

  expect(resName).toBeInTheDocument();
});

it("should check restaurant is newly added", () => {
  const NewlyAdded = isNewlyAdded(ResCard);
  render(<NewlyAdded resData={RES_MOCK} />);

  const newlyLable = screen.getByText("Newly Added");

  expect(newlyLable).toBeInTheDocument();
});
