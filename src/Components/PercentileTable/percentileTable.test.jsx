import React from "react";
import PercentileTable from "./PercentileTable";
import { render, screen } from "@testing-library/react";

describe("Testing Percentile Table", () => {
  beforeEach(() => {
    render(<PercentileTable />);
  });

  it("Should not show any table Rows, but should be in the document", () => {
    const rows = screen.findAllByText("tableRows");
    expect(rows).toBeTruthy;
    expect(rows).toBeNull;
  });

  it("Should not show any mneasurements, but should be in the document", () => {
    const rows = screen.findAllByText("measurements");
    expect(rows).toBeTruthy;
    expect(rows).toBeNull;
  });

  it("Renders the table rows", () => {
    const td = screen.queryAllByRole("table");
    expect(td).toBeVisible;
  });
});
