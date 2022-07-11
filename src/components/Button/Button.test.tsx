import React from "react"
import { render, screen } from "@testing-library/react"
import Button from "./Button"
test("Button renders right text", () => {
   render(<Button>children</Button>)
   expect(screen.queryByText("children")).not.toBeNull()
   render(<Button label="label">not render</Button>)
   expect(screen.queryByText("label")).not.toBeNull()
   render(<Button>text</Button>)
   expect(screen.queryByText("Button")).not.toBeNull()
})
