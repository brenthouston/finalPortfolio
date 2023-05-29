import React from "react";
import { Link } from "react-router-dom"
import './styles/style.css'


function NavTabs(currentPage){
let active=''
 return(
        <ul className="nav nav-tabs">
            <li className="nav-item px-4">
                <Link className={currentPage === 'About Me' ? 'nav-link active'  : 'nav-link'} style={{color: active? "#6edff6" : "#ADADAD"}}to="/">About Me</Link>
            </li>
            <li className="nav-item px-4">
                <Link className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} style={{color: active? "#6edff6" : "#ADADAD"}}to="/Contact">Contact</Link>
            </li>
            <li className="nav-item px-4">
                <Link className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} to="/Portfolio">Portfolio</Link>
            </li>
            <li className="nav-item px-4">
                <Link className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} style={{color: active? "#6edff6" : "#ADADAD"}}to="/Resume">Resume</Link>
            </li>
           
        </ul>

    );
}

export default NavTabs;