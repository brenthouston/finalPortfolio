import React from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase} from "@fortawesome/free-solid-svg-icons";
import { faCode} from "@fortawesome/free-solid-svg-icons";
import { faFile} from "@fortawesome/free-solid-svg-icons";
import { faAt} from "@fortawesome/free-solid-svg-icons";
// import { faBars} from "@fortawesome/free-solid-svg-icons";
// import headShot from "../../images/headShot.png";
// import Port_dsgn from "../../images/Port_dsgn.png";
// import codfolio from "../../images/codfolio_image.jpg";


export default function About() {
  return (

    <div id="about">
        {/* <div className="headshot">
          <img src={headShot} width="150" height="150" alt="Brent Houston headshot." style={{position: "absolute", top:"-2px" ,left:"-10px",objectFit:"cover", opacity:".75", }} ></img>
        </div> */}
      <div className="containery">
        <div className="cardy fade-in ">
          <i>“Hi, I’m <span><h1>Brent Houston,</h1></span> a front-end developer dedicated to building simple, intuitive web solutions that just work.”</i>
        </div>
        <a href="#section1" className="fade-in3">
          <p className="ccc fs-15">Go Deeper</p>
          <FontAwesomeIcon className="ccc" icon={faAngleDown} style={{ fontSize:"22"}} show-modal/>
        </a>
      </div>

      <div id="section1">
        <div className="containery">
           {/* <FontAwesomeIcon className="bars fade-in3" icon={faBars}/> */}
            <h2>At a Glance</h2>
            <h3>Front-End Developer:</h3>
            <p>Currently at Sharp Hue, I specialize in PHP, WordPress, Shopify, HTML, CSS, JavaScript, and jQuery, with experience supporting ASP.NET web applications. As a University of Washington Software graduate and UX/UI Best in Class award recipient, I bring a solid technical foundation and a sharp eye for design. My experience as a small business owner developed essential skills in leadership, communication, and client management, enhancing my ability to collaborate effectively and deliver impactful solutions in web development.</p>
        </div>
      </div>

      <div className="bg_frontpage"></div>

      <div id="section2">

          <h2>My Projects and Insights</h2>
          <div className="flex">
            <div>
              <a className="box" href="/portfolio">
                <FontAwesomeIcon className="icon" icon={faBriefcase} />
              <p>Portfolio</p>
              </a>
            </div>
            <div>
              <a className="box" href="/resume">
                <FontAwesomeIcon className="icon" icon={faFile} />
              <p>Resume</p>
              </a>
            </div>
            <div>
              <a className="box" href="/code-blog">
                <FontAwesomeIcon className="icon" icon={faCode} />
              <p>Code Blog</p>
              </a>
            </div>
            <div>
              <a  className="box"href="/contact">
                <FontAwesomeIcon className="icon" icon={faAt} />
              <p>Contact</p>
              </a>
            </div>
          </div>
      </div>

    </div>




    // <div className="container-about">
    //   <div className=" row mx-5" style={{ justifyContent:"center"}}>
    //     <div
    //       className="box col col-lg-2 d-flex align-items-center justify-content-center"
    //       style={{ minWidth: "287px", justifyContent:"center !important" }}
    //     >
    //       <img className="headShot " src={headShot} alt="Brent Houston headshot."  style={{ marginTop:"50px"}}/>
    //     </div>
    //   </div>

    //   <div className="mt-3 d-grid text">
    //   <h1 style={{textAlign:"center", marginTop:"10px", marginBottom:"0"}}>Brent Houston</h1>
    //   <p style={{textAlign:"center", marginTop:"10px", marginBottom:"30px",fontSize: "20px", fontFamily: "Helvetica, sans-serif", color:"var(--accent1)"}}>Front End Developer</p>
    
    //    <p style={{fontSize: "18px", color: "var(--accent3)"}}> Currently at Sharp Hue, I specialize in PHP, WordPress, Shopify, HTML, CSS, JavaScript, and jQuery, with experience supporting ASP.NET web applications. As a University of Washington Software graduate and <strong>UX/UI Best in Class</strong> award recipient, I bring a solid technical foundation and a sharp eye for design. My experience as a small business owner developed essential skills in leadership, communication, and client management, enhancing my ability to collaborate effectively and deliver impactful solutions in web development.
    //     </p>
       

      
    //   </div>
    // </div>


  );
}
