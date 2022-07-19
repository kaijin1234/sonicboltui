import React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"
describe("Button component", () => {
   test("Button renders children", () => {
      render(<Button>children</Button>)
      expect(screen.queryByText("children")).not.toBeNull()
   })
   test("Button renders label prop", () => {
      render(<Button label="label">not render</Button>)
      expect(screen.queryByText("label")).not.toBeNull()
   })
   test("Button renders label instead of children", () => {
      render(<Button label="text">children</Button>)
      expect(screen.queryByText("text")).not.toBeNull()
   })
})
