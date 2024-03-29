import React from "react";
import "../styles/style.css";
import Cosmic from "../../images/CosmicDaily.png"
import HashTag from "../../images/Hashtag.png"
// import Quiz from "../../images/Quizatron.png"
// import Read from "../../images/Readme.png"
import Stock from "../../images/StockQuote.png"
// import Tech from "../../images/TechBLog.png"
import FinHub from "../../images/FinHub.jpg"
// import Hinge from "../../images/Hinge.png"
import BH from "../../images/BH.png"

export default function Portfolio() {
  return (


    <div className="container">
       <div className="container-fluid">
      <h1 style={{fontSize: 52}}>Portfolio</h1>



      {/* Hinge Gallery */}
      {/* <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Hinge}
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
                Hinge Gallery
              </h4>
              <p className="card-text">
               
              Welcome to Hinge Gallery, the e-commerce platform representing the brick and mortor shop that I have owned and operated for over 10 years. Developed using Shopify, HG is a user-friendly website that offers a seemless shopping experience for art collectors and image lovers looking for unique fine art prints and posters. The site highlights a clean, minimalistic design for easy site navigation. The user can search the collection, brouse all or various collecitons of artworks. Each art piece has a unique and thoughtful description as well as detail and editorial photos.  The site features a dynamically responsive interface, extensive art collection, ability to create user accounts, and a secure payment and checkout process.                 </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://www.hingegallery.com/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div> */}



        {/* FinHub */}

      <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={FinHub}
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
                FinHub
              </h4>
              <p className="card-text">
               
              FinHub is a social media platform built for the investing community. Users can create profiles for themselves when they sign up and add stocks to their watch list for other to come view their profile and watchlist. Users are able to look up tickers, get intra-day stock information, and add to watch list. Use ChatHub topic specific chat rooms to connect with other users. </p>
              <ul style={{listStyleType:"square"}}>
        <li>Tech: Figma, React, Node.js, Express.js, MongoDB, Socket.io, Cloudinary, JS, Bootstrap, ApexCharts</li>
        <li><strong>Goal:</strong> Monitor financial markets and connect investors</li>
        <li>GitHub version control while working on a team</li>
        <li><strong>Challenge:</strong> Adding Real-Time Ticker Chart</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Successfully Integrated ApexCharts, read documentation</li>
        <li>Deployed using Netlify  |  May 2023</li>
      </ul>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://finnhub.netlify.app/home"
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
                  href="https://github.com/brenthouston/finnhub-frontend"
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
              src={HashTag}
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
                Hashtag Adulting
              </h4>
               <p>Ultimate Home Maintance App:</p>
              <p className="card-text ">
                During the development of #Adulting, we leveraged cutting-edge
                technologies to enhance user experience and functionality.
              </p>
              <ul style={{listStyleType:"square"}}>
        <li>Tech: SendGrid, Node Scheduler, Handlebars, Canva, Sequelize, DayJS, MySQL, Adobe Suite</li>
        <li><strong>Goal:</strong> Create a home app tracking long-term maintenance tasks.</li>
        <li>GitHub version control while working on a team</li>
        <li><strong>Challenge:</strong>  #Adulting offers endless customization with abundant information that we wanted to serve up in a user-friendly way.</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong>  Iteration based on user feedback, we achieved our goal through an organized layout and consistency of design.</li>
        <li>Deployed using Heroku  |  May 2023</li>
      </ul>
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


        {/* Cosmic Daily */}
    
      <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Cosmic}
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
               
              Our website is your go-to source for stunning space imagery and up-to-date information on the asteroids NASA is tracking. Explore the universe one day at a time, and travel back in time to view past images. Go Deeper with an info panel that provides details about the image and the objects it captures. </p>
              <ul style={{listStyleType:"square"}}>
        <li>Tech: VS Code, Excalidraw, HTML5, CSS, JS, DayJS, Photoshop, Materialize</li>
        <li><strong>Goal:</strong> Explore NASA's daily space images</li>
        <li>GitHub version control while working on a team</li>
        <li>Fetched NASA's Picture of the Day and data</li>
        <li><strong>Challenge:</strong> User-friendly date selection</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Used Materialize date picker, read documentation</li>
        <li>Deployed using GitHub Pages  |  Apr 2023</li>
      </ul>
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

           {/* Painting Website */}
           <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={BH}
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
                Fine Arts Portfolio
              </h4>
              <p className="card-text">
               
              Fine art portfolio featuring oil paintings by yours truly. Developed using Shopify, this site has a clean look and an intuitive flow.     </p>
              <div className="d-flex justify-content-end ">
                <a
                  href="https://www.brenthouston.com/"
                  class="btn"
                  style={{
                    background: "var(--accent3)",
                    color: "var(--accent2)",
                    margin:"15px"
                  }}
                >
                  Visit Site
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Quizatron */}
        
      {/* <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Quiz}
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
                Quizatron 2000
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
      </div> */}


        {/*StockQuote */}
        
      <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Stock}
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


 

        {/* TechBlog */}
        
      {/* <div id="tech" className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Tech}
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
      </div> */}

      
        {/* Readme Gen*/}
        
      {/* <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={Read}
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
      </div> */}
    </div>
    </div>
  );
}
