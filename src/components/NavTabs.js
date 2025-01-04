import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import "./styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { Button } from "bootstrap";
import { faBars} from "@fortawesome/free-solid-svg-icons";

// function NavTabs(currentPage) {
function App() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
<div>
    <div className={menuOpen ? 'overlay'  : ''} onClick={() => setMenuOpen(false)}></div>
    <div className="header">
    <FontAwesomeIcon className="bars fade-in3" icon={faBars} onClick={() => setMenuOpen(true)}/>
    </div>

    <div className="menu-container" style={{right: menuOpen ? 0 : "-300px"}}>
    <button onClick={() => setMenuOpen(false)}><FontAwesomeIcon className="xmark ccc" icon={faXmark} style={{ fontSize:"22"}}/></button>     
    <div className="menu-body">
        <ul>
            <li><NavLink to='/' onClick={() => setMenuOpen(false)}>Home</NavLink> </li>
            <li><NavLink to='/portfolio' onClick={() => setMenuOpen(false)}>Portfolio</NavLink> </li>  
            <li><NavLink to='/resume' onClick={() => setMenuOpen(false)}>Resume</NavLink> </li>
            <li><NavLink to='/contact' onClick={() => setMenuOpen(false)}>Contact</NavLink> </li>
            <li><NavLink to='/code-blog' onClick={() => setMenuOpen(false)}>Code Blog</NavLink> </li>
        </ul>

        <hr/>

    </div>
        <div className="menu-foot">
            <a href="https://www.linkedin.com/in/brent-houston-53291a13/" target="_blank" rel="noopener noreferrer">
                LinkedIn
            </a>
            <a href="https://www.brenthouston.com" target="_blank" rel="noopener noreferrer">
                Artworks
            </a>
            <a href="https://sharphue.com/" target="_blank" rel="noopener noreferrer">
                Where I work
            </a>
        </div>
    </div>
</div>

















//     <div className="container">
//       <ul className="nav nav-tabs">
//         <li className="nav-item ">
//           <NavLink className={ currentPage === "About Me" ? "nav-link active" : "nav-link" } to="/">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink
//             className={
//               currentPage === "Portfolio" ? "nav-link active" : "nav-link"
//             }
//             to="/Portfolio"
//           >
//             Portfolio
//           </NavLink>
//         </li>
//         <li className="nav-item ">
//           <NavLink
//             className={
//               currentPage === "Contact" ? "nav-link active" : "nav-link"
//             }
//             to="/Contact"
//           >
//             Contact
//           </NavLink>
//         </li>
//         <li className="nav-item ">
//           <NavLink
//             className={
//               currentPage === "Resume" ? "nav-link active" : "nav-link"
//             }
//             to="/Resume"
//           >
//             Resume
//           </NavLink>
//         </li>
//       </ul>
//     </div>
  );
}

// export default NavTabs;
export default App
