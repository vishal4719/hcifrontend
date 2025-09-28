import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders FinanceWise brand", () => {
  render(<App />);
  const brandElement = screen.getByText(/FinanceWise/i);
  expect(brandElement).toBeInTheDocument();
});
