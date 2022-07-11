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
   style?: React.CSSProperties
   onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const Button: React.FC<IButtonProps> = ({
   children,
   style,
   label,
   ...otherProps
}) => {
   const content = label || children || "Button"
   let _style: React.CSSProperties = style || {}
   return (
      <button type="button" className="sb__btn" style={_style} {...otherProps}>
         {content}
      </button>
   )
}
export default Button
