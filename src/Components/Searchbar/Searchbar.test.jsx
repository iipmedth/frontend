import React from "react";
import Searchbar from "./Searchbar";
import SearchIcon from "@mui/icons-material/Search";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input value", () => {
  it("updates on change", () => {
    const { getByPlaceholderText } = render(<Searchbar />);
    const searchInput = getByPlaceholderText("e.g. Hans de Jong");
    const query = "test";

    expect(searchInput.value).toEqual("");
    fireEvent.change(searchInput, { target: { placeholder: query } });
    expect(searchInput).toHaveValue;
  });

  it("contains searchIcon", () => {
    render(
      <Searchbar>
        <SearchIcon sx={{ fontSize: 30 }} />
      </Searchbar>
    );
    const icon = screen.getByTestId("SearchIcon");
    expect(icon).toBeInTheDocument;
  });
});
