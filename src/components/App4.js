import React from "react";
import Navbar2 from "./Navbar2";
import Hero from "./Hero";
import Card from "./Card";




export default function App4() {
    return(
        <div className="container">
            <Navbar2 />
            <Hero />
            <Card
            img ="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg" className="card--image"
            rating= "5.0"
            reviewCount= {6} 
            country= "USA"
            title= "Life lesson with Katie Zaferes"
            price= {136}
            />
        </div>
    )
} 