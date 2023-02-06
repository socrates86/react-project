import React from "react";


export default function Card(Props) {
    return(
        <div className="card">
            <img src={`${Props.img}`} className="card--image"/>
            <div className="card--stats">
                <img src="data:image/png;base64,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" className="card--star" alt="" />
                 <span >{Props.rating}</span>
                 <span className="gray">({Props.reviewCount}) *</span>
                 <span className="gray">{Props.country}</span>
                 <p><b>{Props.title}</b></p>
                 <p><span><b>from ${Props.price}</b></span> / person</p>
            </div>
        </div>
    )
}