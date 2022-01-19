import React from "react";
import PatientsContainer from "./PatientsContainer";
import { render, screen } from "@testing-library/react";

describe("Patient container", () => {
  beforeEach(() => {
    render(<PatientsContainer patients="" />);
  });

  it("Should be an empty list", () => {
    const ul = screen.getByRole("list");
    expect(ul).toBeTruthy();
  });

  it("Should display couldn't find any patients", () => {
    const text = screen.getByText(
      "I couldn't find any patients with the name:"
    );
    expect(text).toBeInTheDocument;
  });

  it("Dissatisfied Icon shoul be in the document", () => {
    const sadIcon = screen.findByTestId("SentimentDissatisfiedIcon");
    expect(sadIcon).toBeInTheDocument;
  });
});
