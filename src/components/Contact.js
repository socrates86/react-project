import React from "react";


export default function Contact({img, name, phone, email}) { // Destructuring Props pattern //
    return(
        <div className="contact-card">
            <img src={img} alt="img" />
            <h3>{name}</h3>
            <div className="group-info">
            <i class="fa fa-phone"></i>
            <p>{phone}</p>
            <div className="group-info">
            <i class="fa fa-envelope"></i>
            <p>{email}</p>
            </div>
            </div>
        </div>
    )
}

// use this syntaxs instead {Props.img}
//     {Props.name}
//     {Props.phone}
//     {Props.email}