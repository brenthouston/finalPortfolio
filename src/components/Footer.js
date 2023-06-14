import React from "react";
import "./styles/style.css";
import { Github, Linkedin, Instagram } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <div className="container">
      <div className="footer d-flex flex-row-reverse bd-highlight">
        <div className="p-2">
          <a href="https://github.com/brenthouston?tab=repositories">
            <Github color="#ADADAD" size={27} />
          </a>
        </div>
        <div className="p-2">
          <a href="https://www.linkedin.com/in/brent-houston-53291a13/">
            <Linkedin color="#ADADAD" size={27} />
          </a>
        </div>
        <div className="p-2">
          <a href="https://www.instagram.com/brenthoustonart/">
            <Instagram color="#ADADAD" size={27} />
          </a>
        </div>
      </div>
    </div>
  );
}
