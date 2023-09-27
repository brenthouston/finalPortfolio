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
      <h2 style={{color: "var(--accent3)", fontSize: "4rem"}}>Part Artist, Part Engineer:</h2> 
        <p className="intro mx-5" style={{fontSize: "24px"}}>
        Fine arts grad turned entrepreneur, University of Washington Software graduate and recipient of the <strong>UX/UI Best in Class award.</strong> My entrepreneurial journey has reinforced my belief in a growth mindset and honed my soft skills. These skills have not only contributed to my success as a small business owner but also made me well-equipped to exceed expectations in web development and design.
        </p>
       

      
      </div>
    </div>
  );
}
