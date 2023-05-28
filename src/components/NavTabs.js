import React from "react";
import { Link } from "react-router-dom"


function NavTabs(){
    return(
        <ul className="nav nav-tabs">
            <li className="nav-itme px-4">
                <Link to="/">About Me</Link>
            </li>
            <li className="nav-itme px-4">
                <Link to="/Contact">Contact</Link>
            </li>
            <li className="nav-itme px-4">
                <Link to="/NotFound">NotFound</Link>
            </li>
            <li className="nav-itme px-4">
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-itme px-4">
                <Link to="/Resume">Resume</Link>
            </li>
        </ul>

    );
}

export default NavTabs;