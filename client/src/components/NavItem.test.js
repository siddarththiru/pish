import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import NavItem from "./NavItem";

describe("NavItem component", () => {
  const mockIcon = <svg />;
  const mockText = "Test Text";
  const mockTo = "/test";

  test("renders with props", () => {
    render(
      <MemoryRouter>
        <NavItem to={mockTo} icon={mockIcon} text={mockText} />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(mockText);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.closest("a")).toHaveAttribute("href", mockTo);
  });

  test("renders icon and text", () => {
    render(
      <Router>
        <NavItem to={mockTo} icon={mockIcon} text={mockText} />
      </Router>
    );

    expect(screen.getByText(mockText)).toBeInTheDocument();
    expect(
      screen.getByText(mockText).previousElementSibling
    ).toBeInTheDocument();
  });

  test("renders with correct styling", () => {
    render(
      <Router>
        <NavItem to={mockTo} icon={mockIcon} text={mockText} />
      </Router>
    );
  });
});
