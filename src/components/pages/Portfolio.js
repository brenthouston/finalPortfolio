import React from "react";
import "../styles/style.css";

export default function Portfolio() {
  return (
    <div className="container-fluid ">
        {/* hashtag adulting */}
        <h1 style={{fontSize: 52}}>Portfolio</h1>
      <div className="card mb-3 mt-4">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./Hashtag.png"
              className="img-fluid rounded-start"
              alt="image of app"
              style={{height:"264px"}}
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "var(--accent1)",
                color: "var(--accent2)",
                height: "264px",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                borderLeft:"1px solid var(accent1)"
              }}
            >
              <h4
                className="card-title"
                style={{ color: "var(--accent)", padding: "10px", fontWeight:"bolder", fontSize:"2.25rem"}}
              >
                Hashtag Adulting
              </h4>
              <p className="card-text m-3">
               
                During the development of #Adulting, we leveraged cutting-edge
                technologies to enhance user experience and functionality. We
                utilized handlebars to efficiently template out web pages,
                providing a seamless and intuitive interface for our users.
              </p>
              <div className="d-flex justify-content-end mt-4">
                <a
                  href="https://hashtag-adulting.herokuapp.com/"
                  class="btn"
                  style={{
                    background: "var(--accent2)",
                    color: "var(--accent3)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/brenthouston/hashtag-adulting"
                  class="btn"
                  style={{
                    background: "var(--accent2)",
                    color: "var(--accent3)",
                    margin:"15px"
                  }}
                >
                  Visit Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
