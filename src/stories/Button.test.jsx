import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { Primary, Red } from "./Button.stories";

test("should render Button", () => {
  const label = "Test Button";
  render(<Button label={label} />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toBeInTheDocument();
  expect(btnElement).toHaveTextContent("Test Button");
});

test("should render Primary Button", () => {
  render(<Primary {...Primary.args} />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toHaveClass("storybook-button--primary");
});

test("should render Red Button", () => {
  render(<Red {...Red.args} />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toHaveStyle("background-color: red");
});
