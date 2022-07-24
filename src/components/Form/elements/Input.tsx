import React from "react"

export interface IInputProps
   extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
   > {}

const Input: React.FC<IInputProps> = (props) => {
   return (
      <input className="sb__form__input" {...props} data-testid="sbforminput" />
   )
}

export default Input
