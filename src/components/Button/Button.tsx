import React from "react"
import "./Button.css"

export interface IButtonProps
   extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
   > {
   /**
    * Button label
    */
   label?: string
}

const Button: React.FC<IButtonProps> = ({ children, label, ...otherProps }) => {
   const content = label || children || "Button"
   return (
      <button type="button" className="sb__btn" {...otherProps}>
         {content}
      </button>
   )
}
export default Button
