import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { MainLayout, useSideBarCtx } from "./MainLayout"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: "Lib/MainLayout",
   component: MainLayout,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // argTypes: {
   //    backgroundColor: { control: "color" },
   // },
} as ComponentMeta<typeof MainLayout>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainLayout> = (args) => (
   <MainLayout {...args} />
)

export const MainLayoutComp = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MainLayoutComp.args = {
   app: "PTS",
   children: <div style={{ height: "800px" }}>Custom component</div>,
}

export const Mainctx = () => {
   return (
      <MainLayout app="PTS">
         <CHild />
      </MainLayout>
   )
}

const CHild = () => {
   const { isExpanded, toggleSidebar } = useSideBarCtx()
   console.log("isExpanded", isExpanded)
   return <button onClick={toggleSidebar}>{isExpanded + ""}</button>
}
