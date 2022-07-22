# **Sonicbolt UI**

A React UI component library to develop modules for SIM and PTS.

## **Prequisites**

Packages needed for the library to run

-  react v17 or above
-  react-router v17 or above
-  react-router-dom v6.3.0 or above

## **Installation**

This library can be installed as a normal npm package.

> npm install @kaijin1234/sonicboltui@latest

## **Usage**

The library consists of React components.

-  MainLayout
-  Container
-  Button

### **MainLayout**

This is the main wrapper component that should be placed at the beginning of a module. This wrapper loads the PTS layout by default.

**#NOTE**

It requires `react-router-dom` as a dependency with a version of `6.3.0` or above .

```jsx
//import
import { MainLayout } from "@kaijin1234/sonicboltui"



//using the component
//requires BrowserRouter from 'react-router-dom'
return (
    <BrowserRouter>
        <Mainlayout>
            //your code here
        </MainLayout>
    </BrowserRouter>
)
```