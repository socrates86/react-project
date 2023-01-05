import React from "react";
import Info from "./components.js/Info";
import About from "./components.js/About";
import Interest from "./components.js/Interest";
import MyFooter from "./components.js/MyFooter";



export default function App3() {
      return(
        <div className="container" >
            <Info />
            <About />
            <Interest />
            <MyFooter />
        </div>
      )
}