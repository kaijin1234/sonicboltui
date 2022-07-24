import React, { useState } from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { MainLayout } from "../MainLayout"
import Form from "./Form"
import { Modal } from "../Modal"
import { BrowserRouter } from "react-router-dom"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: "Lib/Form",
   component: Form
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // argTypes: {
   //    backgroundColor: { control: "color" },
   // },
} as ComponentMeta<typeof Form>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Form> = (args) => {
   const [show, setShow] = useState(true)
   return (
      <BrowserRouter>
         <MainLayout>
            <Modal show onClose={() => {}}>
               <Form>
                  <Form.Item>heyy</Form.Item>
                  <Form.Item>yay</Form.Item>
                  <Form.Item>wow</Form.Item>
                  <Form.Item>jjj</Form.Item>
                  <Form.Input placeholder="kjs" />
               </Form>
            </Modal>
         </MainLayout>
      </BrowserRouter>
   )
}

export const Label = Template.bind({})
Label.args = {
   children: (
      <div style={{ background: "white", height: "300px", width: "200px" }}>
         jshkds
      </div>
   )
}
