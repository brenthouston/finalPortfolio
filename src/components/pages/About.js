import React from "react";
import "../styles/style.css";
import headShot from "../../images/headShot.png";
import Port_dsgn from "../../images/Port_dsgn.png";


export default function About() {
  return (
    <div className="container">
      <div className="col-12">
        <h1 className="text-center"style={{fontSize: 52}}>About Me</h1>
      </div>

      {/* Name and Role box */}
      <div className=" row mx-5">
        {/* box left */}
        <div className="box col" style={{ minWidth: "287px" }}>
          <div className="row mt-2 d-flex align-items-center justify-content-center">
            <h3 id="me">BRENT HOUSTON</h3>
            <h4 className="mt-n-1" id="role">
              Full Stack Developer
            </h4>
          </div>
        </div>

        {/* box middle     */}
        <div className="col-md-auto" style={{ minWidth: "287px" }}>
          <div className="row">
            <div className="box1 d-flex align-items-center justify-content-center">
              <img
                className="designEl "
                src={Port_dsgn}
                alt="design elements"
              />
            </div>
            <div className="box1 d-flex align-items-center justify-content-center">
              <p id="symbol" className="row mt-2">
                `+(){}?/*[]\:`=
              </p>
            </div>
          </div>
        </div>

        {/* box right */}
        <div
          className="box col col-lg-2 d-flex align-items-center justify-content-center"
          style={{ minWidth: "287px" }}
        >
          <img className="headShot " src={headShot} alt="my headshot" />
        </div>
      </div>

      <div className="mt-3 d-grid gap-3 text">
      
        <p className="intro mx-5" style={{fontSize: "21px"}}><strong style={{color: "var(--accent3)", fontSize: "2rem", fontFamily: "Helvetica, sans-serif", textAlign: "center", margin: "0"}}>Engineer & Artist:</strong> <br></br>
        Master artist and small business owner, a University of Washington Software graduate, and <strong>UX/UI Best in Class awardee.</strong> Entrepreneurship strengthened my growth mindset, sharpened problem-solving, and deepened mastery. These skills bolstered my business success and readiness to excel in web development and design.
        </p>
       

      
      </div>
    </div>
  );
}
