import React, { createContext, useContext, useState } from "react"
import "./MainLayout.css"
import { Link, useLocation } from "react-router-dom"
import {
   HamburgerSVG,
   DashboardSVG,
   PersonnelStatsSVG,
   PersonnelMgmtSVG,
   ProjectMgmtSVG,
   SIMLogoSVG,
   SIMLogoFullSVG,
   PTSLogoSVG,
   PTSLogoFullSVG,
   BuildingStatsSVG,
   BIMSVG,
   AlarmsSVG,
   EventsSVG,
   ReportsSVG,
   ScheduleSVG,
   WorkMgmtSVG,
   SonicboltLogoSVG,
} from "../../assets/svgs/svg.logo"
import SonicboltIMG from "../../assets/images/sonicbolt.png"
type TApp = "SIM" | "PTS"
interface IMainLayoutProps {
   app?: TApp
   children: React.ReactNode
}

interface ISidebar {
   isExpanded: boolean
   toggleSidebar: () => void
}

const MainLayout: React.FC<IMainLayoutProps> = ({ app = "PTS", children }) => {
   const { pathname } = useLocation()
   const [isExpanded, setIsExpanded] = useState(false)
   const [isHovered, setIsHovered] = useState(false)
   const Logo = getLogo(app, isExpanded)
   const sidebarLinks = getSidebarData(app, pathname)
   const toggleSidebar = () => {
      setIsExpanded((prev) => !prev)
   }
   return (
      <main
         className="sb__ml"
         data-app={app}
         data-width={isExpanded}
         data-testid="mainlayout"
      >
         <nav className="sb__nav">
            <div className="sb__logo">{Logo}</div>
            <button
               className="sb_ham_btn"
               onClick={toggleSidebar}
               data-testid="layoutbtn"
            >
               <HamburgerSVG style={{ width: "1.2rem" }} />
            </button>
         </nav>
         <div className="sb__sidebar">
            {sidebarLinks}
            <div className="sb_logo_text">
               {isExpanded ? (
                  <img src={SonicboltIMG} alt="sonicbolt" />
               ) : (
                  <>
                     <SonicboltLogoSVG
                        onMouseOver={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        data-testid="sblogo"
                     />
                     {isHovered && (
                        <div className="sb--hovered" data-testid="sbimage">
                           <img
                              className=""
                              src={SonicboltIMG}
                              alt="sonicbolt"
                           />
                        </div>
                     )}
                  </>
               )}
            </div>
         </div>
         <div className="sb__content">
            <SideBarCtx.Provider value={{ isExpanded, toggleSidebar }}>
               {children}
            </SideBarCtx.Provider>
         </div>
      </main>
   )
}

const SideBarCtx = createContext<ISidebar>({
   isExpanded: false,
   toggleSidebar() {},
})
const getLogo = (app: TApp, isFull: boolean) => {
   switch (app) {
      case "SIM":
         if (isFull)
            return <SIMLogoFullSVG style={{ width: "160px", height: "55px" }} />
         return <SIMLogoSVG style={{ width: "51px", height: "51px" }} />
      case "PTS":
         if (isFull)
            return <PTSLogoFullSVG style={{ width: "160px", height: "55px" }} />
         return <PTSLogoSVG style={{ width: "51px", height: "51px" }} />

      default:
         return <></>
   }
}
const sidebarData = {
   sim: [
      {
         link: "/dashboard",
         label: "Dashboard",
         icon: <DashboardSVG />,
      },
      {
         link: "/building-stats",
         label: "Building Stats",
         icon: <BuildingStatsSVG />,
      },
      {
         link: "/bim",
         label: "BIM",
         icon: <BIMSVG />,
      },
      {
         link: "/alarms",
         label: "Alarms",
         icon: <AlarmsSVG />,
      },
      {
         link: "/events",
         label: "Events",
         icon: <EventsSVG />,
      },
      {
         link: "/reports",
         label: "Reports",
         icon: <ReportsSVG />,
      },
      {
         link: "/schedule",
         label: "Schedule",
         icon: <ScheduleSVG />,
      },
      {
         link: "/work-mgmt",
         label: "Work Management",
         icon: <WorkMgmtSVG />,
      },
   ],
   pts: [
      {
         link: "/dashboard",
         label: "Dashboard",
         icon: <DashboardSVG />,
      },
      {
         link: "/personnel-stats",
         label: "Personnel Stats",
         icon: <PersonnelStatsSVG />,
      },
      {
         link: "/personnel-mgmt",
         label: "Personnel Management",
         icon: <PersonnelMgmtSVG />,
      },
      {
         link: "/project-mgmt",
         label: "Project Management",
         icon: <ProjectMgmtSVG />,
      },
   ],
}
const getSidebarData = (app: TApp, pathname: string) => {
   switch (app) {
      case "SIM":
         return (
            <ul>
               {sidebarData["sim"].map((route) => (
                  <Link to={route.link} key={route.link}>
                     <li
                        className={`${pathname === route.link ? "active" : ""}`}
                        data-label={route.label}
                     >
                        <div>{route.icon}</div>
                        <span data-testid="applabel">{route.label}</span>
                     </li>
                  </Link>
               ))}
            </ul>
         )

      case "PTS":
         return (
            <ul>
               {sidebarData["pts"].map((route) => (
                  <Link to={route.link} key={route.link}>
                     <li
                        className={`${pathname === route.link ? "active" : ""}`}
                        data-label={route.label}
                     >
                        <div>{route.icon}</div>
                        <span data-testid="applabel">{route.label}</span>
                     </li>
                  </Link>
               ))}
            </ul>
         )
      default:
         return <></>
   }
}

const useSideBarCtx = () => useContext(SideBarCtx)

export { MainLayout, useSideBarCtx }
