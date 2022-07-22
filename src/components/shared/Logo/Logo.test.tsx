import React from "react"
import { render, screen } from "@testing-library/react"
import { Logo } from "./Logo"

describe("Logo component", () => {
   test("should render SIM logo full", () => {
      render(<Logo app="SIM" isFull={true} />)
      expect(screen.getByTestId("simlogofull")).not.toBeNull()
   })
   test("should render SIM logo small", () => {
      render(<Logo app="SIM" isFull={false} />)
      expect(screen.getByTestId("simlogo")).not.toBeNull()
   })
   test("should render PTS logo full", () => {
      render(<Logo app="PTS" isFull={true} />)
      expect(screen.getByTestId("ptslogofull")).not.toBeNull()
   })
   test("should render PTS logo small", () => {
      render(<Logo app="PTS" isFull={false} />)
      expect(screen.getByTestId("ptslogo")).not.toBeNull()
   })
})
