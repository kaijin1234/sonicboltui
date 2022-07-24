import React from "react"

export interface IItemProps {
   children: React.ReactNode
}

const Item: React.FC<IItemProps> = ({ children }) => {
   return <div className="sb__form__item">{children}</div>
}

export default Item
