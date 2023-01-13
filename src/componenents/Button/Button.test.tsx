import React from "react";
import Button from "./Button";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

test("load and display text", async () => {
  render(<Button type="primary">Test Text</Button>);

  expect(screen.getByRole("button").textContent).toBe("Test Text");
});

test("onClick Function is call 1 time per click", async () => {
  const testFunction = jest.fn(() => {
    return 0;
  });
  render(
    <Button type="primary" onClick={testFunction}>
      Test Button
    </Button>
  );

  const buttonElement = screen.getByRole("button");
  await user.click(buttonElement);

  expect(testFunction).toBeCalledTimes(1);
});
