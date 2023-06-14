import React from "react";
import "../styles/style.css";
import headShot from "../../images/headShot.png";
import Port_dsgn from "../../images/Port_dsgn.png";
import { Container } from "react-dom";

export default function About() {
  return (
    <div className="container">
      <div className="col-12">
        <h1 className="text-center">Portfolio</h1>
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
        <p className="intro mx-5">
          Hi, I'm Brent, an entrepreneur and fine arts graduate from The School
          of the Art Institute of Chicago. For over a decade, I owned and
          operated a successful picture framing business, building a loyal
          client base from scratch, managing the supply chain, and overseeing
          projects from end to end.
        </p>
        <p className="intro mx-5">
          Drawing from my experiences as a collegiate baseball pitcher, I
          developed discipline, focus, and teamwork skills that have served me
          well in my entrepreneurial endeavors. I have also taught myself to
          successfully trade in the stock market, a passion that has taught me
          the value of careful analysis and risk management.
        </p>

        <p className="intro mx-5">
          Recently, I've decided to pivot my career and pursue my passion for
          software engineering. With my experience in project management and
          creativity, I look forward to applying my skills to this new field and
          continuing to learn and grow.
        </p>
      </div>
    </div>
  );
}
