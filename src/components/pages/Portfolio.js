import React from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import certapro from "../../images/certapro.png"
import carmart from "../../images/carmart.png"
import hugghall from "../../images/hugghall.png"
import headShot from "../../images/headshot_cutout.png";
import retained from "../../images/retained.png";
import biotech from "../../images/biotech.png";



export default function Portfolio() {
  return (


    <div id="portfolio" className="">
      <div className="padding">
       <div className="intro" >
          <div className="promo-message">
            <div>
              <img className="headshot" src={headShot} height="auto" alt="brent houoston"></img>
            </div>
            <div class="intro-text">
              <h1 style={{fontSize: 52}}>My Work</h1>
              <p><strong>Explore real-world examples</strong> of my work as a front-end developer, specializing in PHP, HTML, CSS, JavaScript, and jQuery. I develop custom themes for both Shopify and WordPress using PHP and Liquid, and integrate APIs to deliver scalable, responsive, and user-focused websites. Each project reflects my ability to create tailored, high-performance solutions that drive success for clients across various industries.</p>
            </div>
          </div>
        </div>

        <div className="section even">
          <div className="pic">
            <img src={certapro} alt=""></img>         
          </div>
          <div className="text">
            <h3 className="year">2024</h3>
            <h2 className="title">CertaPro </h2>
            <h3 className="sub-title">Franchise Security Maintenance & Feature Development</h3>
            <p className="text-block">Led multi-site security improvements for an international company with over 400 franchise locations. Reviewed and implemented fixes for vulnerabilities identified by Qualys, added HTTP security headers in functions.php, and resolved 2–5 issues weekly. Additionally, I managed form creation, validation, and secure payload delivery, improving both user experience and data handling. Collaborated with IT and internal teams to deploy secure, high-performing solutions with Git-based version control.</p>
            <ul className="code-stack">
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>WORDPRESS</li>
            </ul> 
            <a target="_blank" rel="noopener noreferrer" href="https://certapro.com/landing-page/residential/?vendor=merkle&source=PMAX&utm_medium=Search&utm_source=Google&utm_campaign=MERKLE_CP_SEM_Google_PMAX_PROSP_US_RES_ALL_National&gad_source=1&gclid=CjwKCAiArva5BhBiEiwA-oTnXdmZShm6U6qROCjamJfOYEG5yIQq7hRgRzxLo4bFcVozXXQnuGOdvRoCx6oQAvD_BwE&gclsrc=aw.ds">CERTAPRO PAINTERS <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
          </div>
        </div>

        <div className="section">
          <div className="pic">
             <img src={carmart}alt=""></img>
          </div>
          <div className="text">
            <h3 className="year">2024</h3>
            <h2 className="title">Car-Mart</h2>
            <h3 className="sub-title">Enhancing Local Search Visibility</h3>
            <p className="text-block">I play a key role in maintaining and enhancing the Car-Mart website. One key contribution was replacing over 180 location pages, optimizing scalability for managing store information. I developed an ‘Areas Served’ feature, categorizing nearby towns through custom taxonomy and integrating dynamic schema markup for improved local SEO. To streamline admin tasks, I built a real-time Promotions and Alerts system with automated start/stop times. These updates boosted engagement, reduced administrative effort, and enhanced site performance.</p>
            <ul className="code-stack">
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>WORDPRESS</li>
            </ul> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.car-mart.com/">CAR-MART <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
          </div>
        </div>
    


        <div className="section">
          <div className="pic">
             <img src={hugghall}alt=""></img>
          </div>
          <div className="text">
            <h3 className="year">2024</h3>
            <h2 className="title">Hugg & Hall</h2>
            <h3 className="sub-title">Website Refactor</h3>
            <p className="text-block">A complete WordPress website refactor spanning 400+ pages, including homepage and 11 custom location pages, 30 brand pages, 15 new equipment pages across 3 states. Leveraged Advanced Custom Fields (ACFs) and optimized performance for faster loading times. Designed responsive layouts from Adobe XD prototypes, integrated iframe video modals, and improved SEO—earning LinkedIn recognition from company stakeholders.</p>
            <ul className="code-stack">
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>WORDPRESS</li>
            </ul> 
            <a target="_blank" rel="noopener noreferrer" href="https://www.hugghall.com/">HUGG & HALL <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
          </div>
        </div>
    
        <div className="section even">
          <div className="pic">
             <img src={retained}alt=""></img>
          </div>
          <div className="text">
            <h3 className="year">2024</h3>
            <h2 className="title">Retained</h2>
            <h3 className="sub-title">Executive Placement Services Website Build</h3>
            <p className="text-block">A WordPress site built from the ground up, translating an Adobe XD prototype into pixel-perfect HTML, CSS, and JavaScript. Designed and implemented subtle CSS animations to enhance user engagement. Integrated the design into a WordPress framework using PHP, ensuring responsiveness and scalability. Delivered a user-friendly, intuitive interface focused on usability and UX/UI principles, receiving positive feedback from the client.</p>
            <ul className="code-stack">
              <li>PHP</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JQuery</li>
              <li>WORDPRESS</li>
            </ul> 
            <a target="_blank" rel="noopener noreferrer" href="https://retained.com/">RETAINED <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
          </div>
        </div>

        <div className="section">
          <div className="pic">
             <img src={biotech}alt=""></img>
          </div>
          <div className="text">
            <h3 className="year">2024</h3>
            <h2 className="title">Bio-Tech Pharmacal</h2>
            <h3 className="sub-title">Bio-Tech Website Build</h3>
            <p className="text-block">Played a key role in the custom theme development for BioTech Pharmacal, a company specializing in supplements. I built the entire site from scratch using HTML, CSS, and jQuery, with a focus on improving user experience and site performance. Designed and implemented a dynamic cart system with real-time updates, streamlining the checkout process.This improvement led to increased user engagement and a noticeable boost in overall site performance. By working directly with the custom Shopify theme, I ensured a seamless, high-performance experience without relying on third-party apps.</p>
            <ul className="code-stack">
              <li>HTML</li>
              <li>CSS</li>
              <li>JQUERY</li>
              <li>SHOPIFY</li>
            </ul> 
            <a  target="_blank" rel="noopener noreferrer" href="https://www.biotechpharmacal.com/">BIO-TECH PHARMACAL <FontAwesomeIcon icon={faSquareArrowUpRight} /></a>
          </div>
        </div>
    






        {/* FinHub */}
{/* 
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
        <li>Tech: Figma, React, Node.JQuery, Express.js, MongoDB, Socket.io, Cloudinary, JS, Bootstrap, ApexCharts</li>
        <li><strong>Goal:</strong> Monitor financial markets and connect investors</li>
        <li>GitHub version control while working on a team</li>
        <li><strong>Challenge:</strong> Adding Real-Time Ticker Chart</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Successfully Integrated ApexCharts, read documentation</li>
        <li>Deployed using Netlify  |  May 2023</li>
      </ul>
              <div className="d-justify-content-end ">
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
 */}
             {/* hashtag adulting */}
        
             {/* <div className="card mb-3 mt-4" style={{background:"#131c21"}}>
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
 */}

        {/* Cosmic Daily */}
    
      {/* <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
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
      </div> */}

           {/* Painting Website */}
           {/* <div className="card mb-3 mt-4 " style={{background:"#131c21"}}>
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
      </div> */}

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
{/*         
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
 */}

 

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
