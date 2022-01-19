import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "./registerForm";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("RegisterForm", () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
    render(
      <BrowserRouter>
        <RegisterForm onSubmit={handleSubmit} />
      </BrowserRouter>
    );
  });

  it("Renders and register form takes input", async () => {
    userEvent.type(screen.getByLabelText(/name/i), "John Dee");
    userEvent.type(screen.getByLabelText(/email/i), "john.dee@someemail.com");
    userEvent.type(screen.getByTestId("password"), "password");
    userEvent.type(screen.getByTestId("confirmPassword"), "password");

    await waitFor(() => {
      expect(screen.getByLabelText(/name/i)).toMatchObject({
        value: "John Dee",
      });
      expect(screen.getByLabelText(/email/i)).toMatchObject({
        value: "john.dee@someemail.com",
      });
      expect(screen.getByTestId("password")).toMatchObject({
        value: "password",
      });
      expect(screen.getByTestId("confirmPassword")).toMatchObject({
        value: "password",
      });
    });
  });
});
