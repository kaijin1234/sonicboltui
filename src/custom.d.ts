declare module "*.svg" {
   import React = require("react")
   export const ReactComponent: React.FunctionComponent<
      React.SVGAttributes<SVGElement>
   >
   const src: string
   export default src
}

declare module "*.jpg" {
   const content: string
   export default content
}

declare module "*.png" {
   const content: string
   export default content
}

declare module "*.json" {
   const content: string
   export default content
}

// declare module "*.svg" {
//     const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
//     export default content
//  }
