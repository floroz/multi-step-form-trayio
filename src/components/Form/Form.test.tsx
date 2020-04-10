import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";

describe("<Form />", () => {
  test("should render without crashing", () => {
    const { getByTestId } = render(<Form />);

    expect(getByTestId(/form-component/)).toBeDefined();
  });

  test("should render initially the UserForm with all inputs", () => {
    const { getByLabelText } = render(<Form />);

    expect(getByLabelText(/name/)).toBeDefined();
    expect(getByLabelText(/role/)).toBeDefined();
    expect(getByLabelText(/email/)).toBeDefined();
    expect(getByLabelText(/password/)).toBeDefined();
  });

  test("should render without form error", () => {
    const { queryByTestId } = render(<Form />);

    expect(queryByTestId(/error/)).toBeNull();
  });

  test("should render error messages if there is submission error", () => {
    const { queryByTestId, queryByText, getAllByTestId } = render(<Form />);

    expect(queryByTestId(/error/)).toBeNull();

    fireEvent.click(queryByText(/next/i));

    expect(getAllByTestId(/error/)).toBeDefined();
  });
});
