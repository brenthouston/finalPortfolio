import React from "react";
import { Link } from "react-router-dom"
import './styles/style.css'


function NavTabs(){
 return(
        <ul className="nav nav-tabs">
            <li className="nav-item px-4">
                <Link className="nav-link" to="/">About Me</Link>
            </li>
            <li className="nav-item px-4">
                <Link className="nav-link" to="/Contact">Contact</Link>
            </li>
            <li className="nav-item px-4">
                <Link className="nav-link" to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item px-4">
                <Link className="nav-link" to="/Resume">Resume</Link>
            </li>
           
        </ul>

    );
}

export default NavTabs;