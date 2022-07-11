import React, { createContext, useContext, useState } from "react"
import "./MainLayout.css"
import { ReactComponent as SIMLogo } from "../../assets/sim_logo_icon.svg"
import { ReactComponent as SIMLogoFull } from "../../assets/sim_logo_full.svg"
import { ReactComponent as PTSLogo } from "../../assets/pts_logo_mark.svg"
import { ReactComponent as PTSLogoFull } from "../../assets/pts_logo_full.svg"
import { ReactComponent as HamburgerMenu } from "../../assets/01_hamburger.svg"

type TApp = "SIM" | "PTS"
interface IMainLayoutProps {
   app?: TApp
   children: React.ReactNode
}

interface ISidebar {
   isExpanded: boolean
   toggleSidebar: () => void
}
const SideBarCtx = React.createContext<ISidebar>({
   isExpanded: false,
   toggleSidebar() {},
})
export const useSideBarCtx = () => useContext(SideBarCtx)

const getLogo = (app: TApp, isFull: boolean) => {
   switch (app) {
      case "SIM":
         if (isFull)
            return <SIMLogoFull style={{ width: "160px", height: "55px" }} />
         return <SIMLogo style={{ width: "51px", height: "51px" }} />
      case "PTS":
         if (isFull)
            return <PTSLogoFull style={{ width: "160px", height: "55px" }} />
         return <PTSLogo style={{ width: "51px", height: "51px" }} />

      default:
         return <></>
   }
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
   app = "PTS",
   children,
}) => {
   const [isExpanded, setIsExpanded] = useState(false)
   const Logo = getLogo(app, isExpanded)
   const toggleSidebar = () => {
      setIsExpanded((prev) => !prev)
   }
   return (
      <main className="sb__ml" data-app={app} data-width={isExpanded}>
         <nav className="sb__nav">
            <div className="sb__logo">{Logo}</div>
            <button className="sb_ham_btn" onClick={toggleSidebar}>
               <HamburgerMenu style={{ width: "1.2rem" }} />
            </button>
         </nav>
         <div className="sb__sidebar"></div>
         <div className="sb__content">
            <SideBarCtx.Provider value={{ isExpanded, toggleSidebar }}>
               {children}
            </SideBarCtx.Provider>
         </div>
      </main>
   )
}

//  export interface ISidebarProps {
//    children: React.ReactNode;
//  }

//  export const SideBarStatusProvider: React.FC<ISidebarProps> = (props) => {
//    const { children } = props;
//    const [isExpanded, setIsExpanded] = useState(false);

//    const toggleSidebar = () => {
//      setIsExpanded((prev) => !prev);
//    };

//    return (
//      <SideBarCtx.Provider value={{ isExpanded, toggleSidebar }}>
//        {children}
//      </SideBarCtx.Provider>
//    );
//  };
