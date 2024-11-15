import React from "react";
import "../styles/style.css";
import headShot from "../../images/headShot.png";
// import Port_dsgn from "../../images/Port_dsgn.png";
// import codfolio from "../../images/codfolio_image.jpg";


export default function About() {
  return (
    <div className="container-about">
      <div className=" row mx-5" style={{ justifyContent:"center"}}>
        <div
          className="box col col-lg-2 d-flex align-items-center justify-content-center"
          style={{ minWidth: "287px", justifyContent:"center !important" }}
        >
          <img className="headShot " src={headShot} alt="Brent Houston headshot."  style={{ marginTop:"50px"}}/>
        </div>
      </div>

      <div className="mt-3 d-grid text">
      <h1 style={{textAlign:"center", marginTop:"10px", marginBottom:"0"}}>Brent Houston</h1>
      <p style={{textAlign:"center", marginTop:"10px", marginBottom:"30px",fontSize: "20px", fontFamily: "Helvetica, sans-serif", color:"var(--accent1)"}}>Front End Developer</p>
    
       <p style={{fontSize: "18px", color: "var(--accent3)"}}> Currently at Sharp Hue, I specialize in PHP, WordPress, Shopify, HTML, CSS, JavaScript, and jQuery, with experience supporting ASP.NET web applications. As a University of Washington Software graduate and <strong>UX/UI Best in Class</strong> award recipient, I bring a solid technical foundation and a sharp eye for design. My experience as a small business owner developed essential skills in leadership, communication, and client management, enhancing my ability to collaborate effectively and deliver impactful solutions in web development.
        </p>
       

      
      </div>
    </div>
  );
}
