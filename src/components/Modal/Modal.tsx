import React, { useRef } from "react"
import "./Modal.css"

export interface IModalProps {
   children: React.ReactNode
   show: boolean
   onClose(): void
}

const Modal: React.FC<IModalProps> = ({
   children,
   show = false,
   onClose = () => {}
}) => {
   const ref = useRef(null)

   const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.currentTarget === ref.current) onClose()
   }

   if (!show) return <></>
   return (
      <div
         className="sb__modal"
         data-testid="sbmodal"
         onClick={handleClick}
         ref={ref}
      >
         {children}
      </div>
   )
}

export { Modal }
