import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar Component", () => {
  test("renders the Navbar component correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Check if the Navbar title "PISH" is rendered
    const titleElement = getByText("PISH");
    expect(titleElement).toBeInTheDocument();

    // Check if the Home link is rendered
    const homeLink = getByText("Home");
    expect(homeLink).toBeInTheDocument();

    // Check if the Search link is rendered
    const searchLink = getByText("Search");
    expect(searchLink).toBeInTheDocument();

    // Check if the Account link is rendered
    const accountLink = getByText("Account");
    expect(accountLink).toBeInTheDocument();
  });
});
