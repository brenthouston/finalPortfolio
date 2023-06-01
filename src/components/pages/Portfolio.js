import React from "react";
import "../styles/style.css";

export default function Portfolio() {
  return (
    <div className="container-fluid ">
        {/* Cosmic Daily */}
        <h1 style={{fontSize: 52}}>Portfolio</h1>
      <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./CosmicDaily.png"
              className="img-fluid rounded-start"
              alt="app"
            
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "#131c21",
                color: "var(--accent1)",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                borderLeft:"1px solid var(accent1)"
              }}
            >
              <h4
                className="card-title"
                style={{ color: "var(--accent)", padding: "10px", fontWeight:"bolder", fontSize:"2.25rem"}}
              >
                Cosmic Daily
              </h4>
              <p className="card-text">
               
              Our website is your go-to source for stunning space imagery and up-to-date information on the asteroids NASA is tracking. With our NASA Picture of the Day section, you can explore the universe one day at a time and travel back in time to view past images. Each picture is accompanied by an info panel that provides fascinating details about the image and the objects it captures. In addition, our website offers a wealth of information on the asteroids NASA is currently monitoring, including detailed descriptions and photos of each asteroid. Whether you're an astronomy enthusiast or simply appreciate the beauty of the cosmos, our website is the perfect place to indulge your curiosity and explore the wonders of space.
              </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://brenthouston.github.io/Cosmic-Daily/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/brenthouston/Cosmic-Daily"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
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

        {/* Quizatron */}
        
      <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./Quizatron.png"
              className="img-fluid rounded-start"
              alt="app"
              style={{height:"264px"}}
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "#131c21",
                color: "var(--accent1)",
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
                Quizatron2000
              </h4>
              <p className="card-text ">
               
              The Quizatron 2000 is a retro style quiz game that asks questions about our galaxy and solar system. The user can try to beat the high score in the alotted time. If the user ranks among the high scores they may enter initials to be saved for posterity.
              </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://brenthouston.github.io/quiz-game/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/brenthouston/quiz-game"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
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
        {/*StockQuote */}
        
      <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./StockQuote.png"
              className="img-fluid rounded-start"
              alt="app"
              style={{height:"264px"}}
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "#131c21",
                color: "var(--accent1)",
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
                Stock Quote
              </h4>
              <p className="card-text ">
               
                Search your ticker and get the market data for the day. 
              </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://brenthouston.github.io/stockQuoteData/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/brenthouston/stockQuoteData"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
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
        {/* hashtag adulting */}
        
      <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./Hashtag.png"
              className="img-fluid rounded-start"
              alt="app"
          
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "#131c21",
                color: "var(--accent1)",
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
              <p className="card-text ">
               
                During the development of #Adulting, we leveraged cutting-edge
                technologies to enhance user experience and functionality. We
                utilized handlebars to efficiently template out web pages,
                providing a seamless and intuitive interface for our users.
              </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://hashtag-adulting.herokuapp.com/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/brenthouston/hashtag-adulting"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
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
        {/* TechBlog */}
        
      <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./TechBLog.png"
              className="img-fluid rounded-start"
              alt="app"
              style={{height:"264px"}}
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "#131c21",
                color: "var(--accent1)",
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
                Tech Blog
              </h4>
              <p className="card-text ">
               
                Participate in the Tech community by reading and posting on this full CRUD web app. 
              </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://hashtag-adulting.herokuapp.com/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
                <a
                  href="https://github.com/brenthouston/TechBlog"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
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
        {/* Readme Gen*/}
        
      <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="./Readme.png"
              className="img-fluid rounded-start"
              alt="app"
              
            ></img>
          </div>
          <div className="col-md-8">
            <div
              className="card-body"
              style={{
                background: "#131c21",
                color: "var(--accent1)",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
                borderLeft:"1px solid var(accent1)"
              }}
            >
              <h4
                className="card-title"
                style={{ color: "var(--accent)", padding: "10px", fontWeight:"bolder", fontSize:"2.25rem"}}
              >
                README Generator
              </h4>
              <p className="card-text ">
               
              I wanted to make it easier to create README's for the various projects I make on GitHub. This application prompts the user with a series of questions then auto populates a professional grade README for thier GitHub. I have learned many things in building this including modularization, asynchronous functions, npm, inquirer and Node.js.
              </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://drive.google.com/file/d/1PrF5F8ShimMOjbustP8UV6ZC-SqUbHsq/view"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Video Walk-Thru
                </a>
                <a
                  href="https://github.com/brenthouston/README-Generator"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
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
