import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { MainLayout } from "../MainLayout"
import { Modal } from "./Modal"
import { BrowserRouter } from "react-router-dom"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: "Lib/Modal",
   component: Modal
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // argTypes: {
   //    backgroundColor: { control: "color" },
   // },
} as ComponentMeta<typeof Modal>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Modal> = (args) => {
   const [show, setShow] = useState(true)
   return (
      <BrowserRouter>
         <MainLayout>
            <Modal {...args} show={show} onClose={() => setShow(!show)} />
         </MainLayout>
      </BrowserRouter>
   )
}

export const Label = Template.bind({})
Label.args = {
   children: "Modal"
}
