import React from "react"
import "./MainLayout.css"
import { ReactComponent as SIMLogo } from "../../assets/sim_logo_icon.svg"
import { ReactComponent as SIMLogoFull } from "../../assets/sim_logo_full.svg"
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
               {isExpanded ? <SIMLogoFull /> : <SIMLogo />}
            </div>
         </nav>
         <div className="sb__sidebar">sidebar</div>
         <div className="sb__content">{children}</div>
      </main>
   )
}

export default MainLayout
