import React from "react";



export default function Info() {
    return(
        <div>
        <img className="img-man" src="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc=" alt="img"/>
        <h3 className="h3" >Morrison Anyanwu</h3>
        <h4 className="h4" >Frontend Developer</h4>
        <small className="website" >morrison website</small><br /><br />
        <form className="form-input">
            <input type="button" className="email" name="email" value="Email"></input>
            <input type="button" className="linkdin" name="Linkdin" value="Linkdin"></input>
        </form>
        </div>
    )
}

