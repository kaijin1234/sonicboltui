import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";
test("adds 1 + 2 to equal 3", () => {
  expect(3).toBe(3);
  render(<Button>kjashdkjsah</Button>);
  expect(screen.queryByText("kjashdkjsah")).not.toBeNull();
});
