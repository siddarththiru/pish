import "@testing-library/jest-dom";
import ImageSliderNavButton from "./ImageSliderNavButton";
import { render, screen } from "@testing-library/react";

test("renders ImageSliderNavButton component", () => {
  const place = {
    name: "Test Place",
    images: {
      link1: "test_image_url",
    },
  };
  render(<ImageSliderNavButton place={place} />);

  const placeNameElement = screen.getByText(/Test Place/i);
  expect(placeNameElement).toBeInTheDocument();

  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
});
