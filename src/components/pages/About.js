import React from "react";

import '../styles/style.css'

import '../styles/reset.css'


const navLine={
    line:{
        color: "#ADADAD",
    width: "100%",}
    }
export default function About(){


    return(

        <div className="about-div">
            <hr style={navLine.line}></hr>
            <h1 >PORTFOLIO</h1>
            <div className="box"> 
                <div className="mybox">
                    <h3 id="me">BRENT HOUSTON</h3>
                    <h4 id="role">Full Stack Developer</h4>
                </div>
                
                <div className="box-child">
                    <hr></hr>
                </div>
            </div>
        </div>
    );
}