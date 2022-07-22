import React, { useEffect, useState } from "react"
import { MaximizeSVG, MinimizeSVG } from "../../assets/svgs/svg.logo"
import { useSideBarCtx } from "../MainLayout"
import { Logo } from "../shared/Logo"
import "./Container.css"

export interface IContainerProps {
   children: React.ReactNode
   /**
    * Display an icon on the header
    */
   icon?: string | React.ReactNode
   /**
    * Container title
    */
   title?: string
   /**
    * Container styles
    */
   style?: React.CSSProperties
   /**
    * Container Header styles
    */
   headerStyles?: React.CSSProperties
   /**
    * Container Body styles
    */
   bodyStyles?: React.CSSProperties
   /**
    * Container width
    */
   width?: string
   /**
    * Container height
    */
   height?: string
   /**
    * Additional user button components
    */
   buttons?: React.ReactNode
}

const Container: React.FC<IContainerProps> = ({
   children,
   title = "",
   icon: Icon,
   style = {},
   headerStyles,
   width,
   height,
   buttons,
   bodyStyles,
}) => {
   const [isFullScreen, setIsFullScreen] = useState(false)
   const { app, isExpanded } = useSideBarCtx()
   if (width) style.width = width
   if (height) style.height = height
   useEffect(() => {
      if (isFullScreen) document.body.style.overflow = "hidden"
      else document.body.style.overflow = "auto"
   }, [isFullScreen])

   return (
      <section
         className={`
         sb__container 
         sb__shadow
         ${isFullScreen ? "fullscreen" : ""}`}
         style={style}
         data-app={app}
         data-testid="sbcontainer"
      >
         <header className="sb__container__header" style={headerStyles}>
            {isFullScreen && (
               <div className="sb__container__header__logo">
                  <Logo app={app} isFull={isExpanded} />
               </div>
            )}
            <div
               className="sb__container__header__title"
               data-testid="sbcontainertitle"
            >
               {Icon && Icon}
               {title}
            </div>
            <div className="sb__container__header__buttons">
               {buttons && buttons}
               <button
                  onClick={() => setIsFullScreen(!isFullScreen)}
                  data-testid="sbcontainerbtn"
               >
                  {isFullScreen ? <MinimizeSVG /> : <MaximizeSVG />}
               </button>
            </div>
         </header>
         <div
            className="sb__container__body"
            style={bodyStyles}
            data-testid="sbcontainerbody"
         >
            {children}
         </div>
      </section>
   )
}

export { Container }
