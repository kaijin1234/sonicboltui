import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { MainLayout } from "../MainLayout"
import { Container } from "./Container"
import { BrowserRouter } from "react-router-dom"

describe("Container component", () => {
   test("Container renders on screen", () => {
      render(
         <BrowserRouter>
            <MainLayout>
               <Container>Hey</Container>
            </MainLayout>
         </BrowserRouter>
      )
      expect(screen.getByTestId("sbcontainer")).not.toBeNull()
   })
   test("Container is fullscreen", () => {
      render(
         <BrowserRouter>
            <MainLayout>
               <Container>Hey</Container>
            </MainLayout>
         </BrowserRouter>
      )
      fireEvent.click(screen.getByTestId("sbcontainerbtn"))
      expect(
         screen.getByTestId("sbcontainer").classList.contains("fullscreen")
      ).toBe(true)
   })
   test("Container has correct title", () => {
      render(
         <BrowserRouter>
            <MainLayout>
               <Container title="Hey">Hey</Container>
            </MainLayout>
         </BrowserRouter>
      )
      expect(screen.getByTestId("sbcontainertitle").textContent).toBe("Hey")
   })
   test("Container has text", () => {
      render(
         <BrowserRouter>
            <MainLayout>
               <Container>heyya</Container>
            </MainLayout>
         </BrowserRouter>
      )
      expect(screen.getByText("heyya")).not.toBeNull()
   })
})
