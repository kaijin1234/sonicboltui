import React from "react"
import "./MainLayout.css"
import SIMLogo from "../../assets/sim_logo_icon.svg"
import SIMLogoFull from "../../assets/sim_logo_full.svg"
export interface IMainLayoutProps {
   app?: String
   isExpanded: boolean
   children: React.ReactNode
}

const MainLayout: React.FC<IMainLayoutProps> = ({
   app = "PTS",
   isExpanded = false,
   children,
}) => {
   const Logo = isExpanded ? SIMLogoFull : SIMLogo
   return (
      <main className="sb__ml" data-app={app} data-width={isExpanded}>
         <nav className="sb__nav">
            <div className="sb__logo">
               {isExpanded ? (
                  <SIMLogoFull style={{ width: "180px", height: "60px" }} />
               ) : (
                  <SIMLogo style={{ width: "60px", height: "60px" }} />
               )}
            </div>
         </nav>
         <div className="sb__sidebar">sidebar</div>
         <div className="sb__content">{children}</div>
      </main>
   )
}

export default MainLayout
