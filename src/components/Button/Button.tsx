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

const Button: React.FC<IButtonProps> = (props) => {
   const { children, style, label } = props
   const content = label || children || "Button"
   let _style: React.CSSProperties = style || {}
   return (
      <button type="button" className="sb__btn" style={_style}>
         {content}
      </button>
   )
}
export default Button
