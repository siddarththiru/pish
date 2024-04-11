import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

describe("SearchBar", () => {
  test("handleSearch updates input and sets results correctly", () => {
    const placeList = [
      { name: "New York" },
      { name: "Los Angeles" },
      { name: "Chicago" },
    ];
    const setResults = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar placeList={placeList} setResults={setResults} />
    );
    const input = getByPlaceholderText("Type to Search...");

    fireEvent.change(input, { target: { value: "york" } });

    expect(input.value).toBe("york");
    expect(setResults).toHaveBeenCalledWith([{ name: "New York" }]);
  });
});
