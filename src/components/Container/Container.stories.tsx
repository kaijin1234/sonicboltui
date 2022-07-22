import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Container } from "./Container"
import { MainLayout } from "../MainLayout"
import { BrowserRouter } from "react-router-dom"
import { AlarmsSVG } from "../../assets/svgs/svg.logo"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
   title: "Lib/Container",
   component: Container,
   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
   // argTypes: {
   //    backgroundColor: { control: "color" },
   // },
} as ComponentMeta<typeof Container>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Container> = (args) => (
   <BrowserRouter>
      <MainLayout app="SIM">
         <Container {...args} />
      </MainLayout>
   </BrowserRouter>
)

export const SIM = Template.bind({})
SIM.args = {
   children: "Children",
   icon: <AlarmsSVG />,
}

const Template2: ComponentStory<typeof Container> = (args) => (
   <BrowserRouter>
      <MainLayout>
         <Container {...args} icon={<AlarmsSVG />} />
         <Container
            {...args}
            // style={{ width: "300px", height: "200px" }}
            width="90%"
            height="300px"
            title="Heyy"
            buttons={<Btns />}
         />
      </MainLayout>
   </BrowserRouter>
)
export const PTS = Template2.bind({})
PTS.args = {
   children: "Children",
}

const Btns = () => {
   return <button>hoiii</button>
}
