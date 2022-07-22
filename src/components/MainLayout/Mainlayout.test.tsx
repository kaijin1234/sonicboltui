import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { MainLayout, useSideBarCtx } from "./MainLayout"
import { BrowserRouter } from "react-router-dom"

describe("MainLayout component", () => {
   test("Mainlayout renders on screen", () => {
      render(
         <BrowserRouter>
            <MainLayout>children</MainLayout>
         </BrowserRouter>
      )
      expect(screen.getByTestId("mainlayout")).not.toBeNull()
   })
   test("Mainlayout sidebar is unexpanded by default", () => {
      const ChildComponent = () => {
         const { isExpanded } = useSideBarCtx()
         return <h1 data-testid="isExpanded">{isExpanded + ""}</h1>
      }
      render(
         <BrowserRouter>
            <MainLayout>
               <ChildComponent />
            </MainLayout>
         </BrowserRouter>
      )
      expect(screen.getByTestId("isExpanded").textContent).toBe("false")
   })
   test("Mainlayout sidebar is expanded", () => {
      const ChildComponent = () => {
         const { isExpanded } = useSideBarCtx()
         return <h1 data-testid="isExpanded">{isExpanded + ""}</h1>
      }
      render(
         <BrowserRouter>
            <MainLayout>
               <ChildComponent />
            </MainLayout>
         </BrowserRouter>
      )
      fireEvent.click(screen.getByTestId("layoutbtn"))
      expect(screen.getByTestId("isExpanded").textContent).toBe("true")
   })
   test("should render links for SIM", () => {
      render(
         <BrowserRouter>
            <MainLayout app="SIM">children</MainLayout>
         </BrowserRouter>
      )
      expect(screen.getAllByTestId("applabel")).toHaveLength(8)
   })
   test("should render links for PTS", () => {
      render(
         <BrowserRouter>
            <MainLayout>children</MainLayout>
         </BrowserRouter>
      )
      expect(screen.getAllByTestId("applabel")).toHaveLength(4)
   })
   test("should render links for PTS", () => {
      render(
         <BrowserRouter>
            <MainLayout app="PTS">children</MainLayout>
         </BrowserRouter>
      )
      expect(screen.getAllByTestId("applabel")).toHaveLength(4)
   })
   test("should not render image on hover", () => {
      render(
         <BrowserRouter>
            <MainLayout>children</MainLayout>
         </BrowserRouter>
      )
      expect(screen.queryByTestId("sbimage")).toBeFalsy()
   })
   test("should render image on hover", () => {
      render(
         <BrowserRouter>
            <MainLayout>children</MainLayout>
         </BrowserRouter>
      )
      fireEvent.mouseOver(screen.getByTestId("sblogo"))
      expect(screen.getByTestId("sbimage")).not.toBeNull()
   })
   test("should render sonicbolt svg when sidebar is not expanded", () => {
      render(
         <BrowserRouter>
            <MainLayout>children</MainLayout>
         </BrowserRouter>
      )
      expect(screen.getByTestId("sblogo")).not.toBeNull()
   })
   test("should not render any links", () => {
      render(
         <BrowserRouter>
            {/*//@ts-ignore */}
            <MainLayout app="sim">children</MainLayout>
         </BrowserRouter>
      )

      expect(screen.queryAllByTestId("linklist")).toHaveLength(0)
   })
})
