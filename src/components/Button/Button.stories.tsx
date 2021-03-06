import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "./Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: "Lib/Button",
   component: Button,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // argTypes: {
   //    backgroundColor: { control: "color" },
   // },
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => (
   <Button
      {...args}
      onClick={(e) => console.log(e)}
      style={{ padding: "20px" }}
   />
)

export const None = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Label = Template.bind({})
Label.args = {
   label: "Label",
}

export const Children = Template.bind({})
Children.args = {
   children: "Children",
}
