import React from "react"
import "./Logo.css"
import {
   PTSLogoFullSVG,
   PTSLogoSVG,
   SIMLogoFullSVG,
   SIMLogoSVG,
} from "../../../assets/svgs/svg.logo"
import { TApp } from "../../../types/AppTypes"

interface ILogoProps {
   app: TApp
   isFull: boolean
}

const getLogo = (app: TApp, isFull: boolean) => {
   switch (app) {
      case "SIM":
         if (isFull)
            return (
               <SIMLogoFullSVG
                  style={{ width: "160px", height: "55px" }}
                  data-testid="simlogofull"
               />
            )
         return (
            <SIMLogoSVG
               style={{ width: "51px", height: "51px" }}
               data-testid="simlogo"
            />
         )
      case "PTS":
         if (isFull)
            return (
               <PTSLogoFullSVG
                  style={{ width: "160px", height: "55px" }}
                  data-testid="ptslogofull"
               />
            )
         return (
            <PTSLogoSVG
               style={{ width: "51px", height: "51px" }}
               data-testid="ptslogo"
            />
         )

      default:
         return <></>
   }
}
export const Logo: React.FC<ILogoProps> = ({ app, isFull }) => {
   const logo = getLogo(app, isFull)
   return <div className="sb__logo">{logo}</div>
}
