import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import Form from "./Form"

describe("Modal component", () => {
   test("should render text inside form item", () => {
      render(
         <Form>
            <Form.Item>hey</Form.Item>
         </Form>
      )
      expect(screen.getByText("hey")).not.toBeNull()
   })
   test("should render text inside form input", () => {
      render(
         <Form>
            <Form.Input value={"hello"} />
         </Form>
      )
      expect(screen.getByTestId("sbforminput").value).toBe("hello")
   })
})
