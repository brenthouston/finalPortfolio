import React from "react";
import "../styles/style.css";
import headShot from "../../images/headShot.png";
// import Port_dsgn from "../../images/Port_dsgn.png";
// import codfolio from "../../images/codfolio_image.jpg";


export default function About() {
  return (
    <div className="container">
      <div className="col-12">
        <h1 className="text-center"style={{fontSize: 32}}>About Me</h1>
      </div>

      {/* Name and Role box */}
      <div className=" row mx-5">


     

        {/* box right */}
        <div
          className="box col col-lg-2 d-flex align-items-center justify-content-center"
          style={{ minWidth: "287px" }}
        >
          <img className="headShot " src={headShot} alt="Brent Houston headshot." />
        </div>
      </div>

      <div className="mt-3 d-grid gap-3 text">
      
        <p className="intro mx-5" style={{fontSize: "18px"}}><strong style={{color: "var(--accent3)", fontSize: "24px", fontFamily: "Helvetica, sans-serif", textAlign: "center", margin: "0"}}>Brent Houston <br/>Front End Developer</strong> <br></br>
        Currently at Sharp Hue, I specialize in PHP, WordPress, Shopify, HTML, CSS, JavaScript, and jQuery, with experience supporting ASP.NET web applications. As a University of Washington Software graduate and <strong>UX/UI Best in Class</strong> award recipient, I bring a solid technical foundation and a sharp eye for design. My experience as a small business owner developed essential skills in leadership, communication, and client management, enhancing my ability to collaborate effectively and deliver impactful solutions in web development.
        </p>
       

      
      </div>
    </div>
  );
}
