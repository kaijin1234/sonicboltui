// @ts-nocheck
import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { Modal } from "./Modal"

describe("Modal component", () => {
   test("should render modal component", () => {
      render(<Modal show>heyy</Modal>)
      expect(screen.queryByTestId("sbmodal")).not.toBeNull()
   })
   test("should not render modal component", () => {
      render(<Modal show={false}>heyy</Modal>)
      expect(screen.queryByTestId("sbmodal")).toBeNull()
   })
})
