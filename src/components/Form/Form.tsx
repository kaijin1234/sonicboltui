import React from "react"
import "./Form.css"
import Item from "./elements/Item"
import Input from "./elements/Input"
export interface IFormProps
   extends React.DetailedHTMLProps<
      React.FormHTMLAttributes<HTMLFormElement>,
      HTMLFormElement
   > {
   children: React.ReactNode
}

const Form: React.FC<IFormProps> = ({ children, ...otherProps }) => {
   return (
      <form
         className="sb__form sb__shadow"
         {...otherProps}
         data-testid="sbform"
      >
         {children}
      </form>
   )
}

export default Object.assign(Form, {
   Item,
   Input
})
