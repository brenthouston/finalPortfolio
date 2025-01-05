import React from "react";
import "../styles/style.css";
// import ResDownload from "./ResDownload";

export default function Resume() {
  return (
      <div id="resume" className="info">
    <div className="container resume col">
      <div className="container">
        <div className="row d-flex justify-content-between">

          <div className="col d-flex justify-content-end align-self-center" style={{ marginTop: '60px'}}>
            {/* <ResDownload /> */}
          </div>
        </div>
      </div>
      <div className=" row mx-auto text-center">
        <h1>Brent Houston</h1> 
        <p style={{ margin: 0 }}>Tacoma, WA | 773-988-2768 | brentjustinhouston@gmail.com | <a href="https://www.linkedin.com/in/brent-houston-53291a13/" style={{color: "var(--accent4)", }}>LinkedIn</a> | <a href="https://github.com/brenthouston" style={{color: "var(--accent4)"}}>GitHub</a></p>
      </div> 

      <h4>Summary</h4>  
        <div className="sec-block">       
        <p>Currently at Sharp Hue, I specialize in PHP, WordPress, Shopify, HTML, CSS, JavaScript, and jQuery, with experience supporting ASP.NET web applications. As a University of Washington Software graduate and <strong>UX/UI Best in Class</strong> award recipient, I bring a solid technical foundation and a sharp eye for design. My experience as a small business owner developed essential skills in leadership, communication, and client management, enhancing my ability to collaborate effectively and deliver impactful solutions in web development.</p>
      </div>

      <h4>Experience</h4><span style={{ float: "right" }}><em>Tacoma, WA</em></span>
      <div className="sec-block">
        <a href="https://www.sharphue.com/" style={{color: "var(--accent4)"}}  target="_blank" rel="noopener noreferrer" aria-label="See where Brent Houston currently works."><strong>Sharp Hue</strong></a>
        <p style={{fontSize: "15px", marginBottom:"0"}}>Front-End Developer | 2023 - Present</p>
        <ul>
          <li>Custom CSS Framework Development: Designed and implemented a custom CSS framework adopted company-wide, standardizing UI components and improving development efficiency across multiple projects.</li>
          <li>High-Impact Website Refactors: Led a complete WordPress refactor for Hugg & Hall, covering 600+ pages, including custom dynamic location pages and SEO enhancements, resulting in improved site performance and recognition from stakeholders.</li>
          <li>E-Commerce Platform Expertise: Rebuilt the Biotech Pharmacal Shopify store from scratch, creating a seamless user experience with a real-time cart system and optimized site performance without relying on third-party apps.</li>
          <li>Scalable Content Solutions: Overhauled 180+ location pages for Car-Mart using ACFs and custom templates, introducing dynamic content, schema markup, and SEO-focused “Areas Served” functionality that boosted local search rankings by 40%.</li>
          <li>Proactive Security Enhancements: Identified and resolved vulnerabilities for CertaPro’s franchise websites, implementing security headers and other fixes to improve site safety and reliability across 400+ locations.</li>
        </ul>
        </div>  

        <h4>Technical Skills</h4>
      <div className="sec-block">
        <p style={{ color: "var(--accent1)", margin: 0 }}><strong>Languages:</strong> JavaScript (ES6+), PHP, HTML5, CSS3, SQL</p>
        <p style={{ color: "var(--accent1)", margin: 0 }}><strong>Framework & Libraries:</strong> React, Node.js, jQuery, Bootstrap</p>
        <p style={{ color: "var(--accent1)", margin: 0}}><strong>Tools & Platforms:</strong>  WordPress, Shopify, Git, Netlify, Figma, Adobe Creative Suite, VS Code, ASP.NET</p>
        <p style={{ color: "var(--accent1)", margin: 0, marginBottom:"20px"}}><strong>Other Skills:</strong>   Responsive Design, SEO Optimization, API Integration, Agile Development, Scrum Development</p>
      </div>

      <h4>Notable Projects</h4>{" "}
      <div className="sec-block">
        <a href="https://www.certapro.com/" style={{color: "var(--accent4)"}}  target="_blank" rel="noopener noreferrer" aria-label="See industry work Brent Houston did for CertaPro.com"><strong>CertaPro</strong></a>
        <ul>
          <li>Led multi-site security improvements for an international company with over 400+ franchise locations.</li>
          <li>Reviewed and implemented fixes for vulnerabilities identified by Qualys, such as inscure transport, outdated libraries, and click-jacking protection. On average, 2–5 issues weekly.</li>
          <li>Implemented PHP form creation, validation, and secure payload delivery, improving both user experience and data handling.</li>
          <li>Collaborated with IT and internal teams to deploy secure, high-performing solutions with Git-based version control.</li>
        </ul>

        <a href="https://www.car-mart.com/" style={{color: "var(--accent4)"}}  target="_blank" rel="noopener noreferrer" aria-label="See industry work Brent Houston did for Car-Mart.com"><strong>Car-Mart</strong></a>
        <ul>
          <li>Key individual for maintaining and delivering site enhancements.</li>
          <li>Primary owner for building out "New Locations" feature for 180+ dealerships optimizing scalability for managing store information via a custom template in WordPress CRM.</li>
          <li>Developed "Areas Served" feature, categorizing nearby towns through custom taxonomy and integrating dynamic schema markup for improved local SEO.</li>
          <li>To streamline admin tasks, I built a real-time Promotions and Alerts system with automated start/stop times.</li>
        </ul>

        <a href="https://www.hugghall.com/" style={{color: "var(--accent4)"}} target="_blank" rel="noreferrer"><strong >Hugg & Hall</strong></a>
        <ul>
          <li>Led a complete WordPress custom template website refactor spanning 400+ pages, including homepage and 11 custom location pages, 30 brand pages, 15 new equipment pages across 3 states.</li>
          <li>Leveraged Advanced Custom Fields (ACFs) and optimized performance for faster loading times.</li>
          <li>Designed responsive layouts from Adobe XD prototypes, integrated iframe video modals, and improved SEO earning LinkedIn recognition from company stakeholders.</li>
        </ul>

        <a href="https://retained.com/" style={{color: "var(--accent4)"}} target="_blank" rel="noreferrer"><strong >Retained | Executive Placement Services Website</strong></a>
        <ul>
          <li>A WordPress site built from the ground up, translating an Adobe XD prototype into pixel-perfect HTML, CSS, and JavaScript.</li>
          <li>Designed and implemented subtle CSS animations to enhance user engagement. Integrated the design into a WordPress framework using PHP, ensuring responsiveness and scalability.</li>
          <li>Delivered a user-friendly, intuitive interface focused on usability and UX/UI principles, receiving positive feedback from the client.</li>
        </ul>

        <a href="https://brenthouston.netlify.app/" style={{color: "var(--accent4)"}} target="_blank" rel="noreferrer"><strong >Web Dev Portfolio</strong></a>
        <ul style={{listStyleType:"square"}}>
          <li>Tech: VS Code, React, Node.js, @EmailJS, Bootstrap, Photoshop</li>
          <li><strong>Goal:</strong> <em>Showcase web deveopment work</em></li>
          <li><strong>Challenge:</strong> Routing user comments to my personal email</li>
          <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Researching and implementing @EmailJS to achieve this</li>
          <li>Deployed using Netlify  |  May 2023</li>
        </ul>
      </div>
{/* 
     <a href="https://brenthouston.github.io/Cosmic-Daily/" style={{color: "var(--accent4)"}} target="_blank" rel="noreferrer"><strong >Cosmic Daily:</strong><em>  Explore the Universe, one day at a time.</em></a>
      <ul style={{listStyleType:"square"}}>
        <li>Tech: VS Code, Excalidraw, HTML5, CSS, JS, DayJS, Photoshop, Materialize</li>
        <li><strong>Goal:</strong> <em>Explore NASA's daily space images</em></li>
        <li>GitHub version control while working on a team</li>
        <li>Fetched NASA's Picture of the Day and data</li>
        <li><strong>Challenge:</strong> User-friendly date selection</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Used Materialize date picker, read documentation</li>
        <li>Deployed using GitHub Pages  |  Apr 2023</li>
      </ul>
     <a href="https://finnhub.netlify.app/login" style={{color: "var(--accent4)"}}rel="noreferrer" target="_blank" ><strong >FinHub:</strong><em>  Financial Markets Monitoring and Social Media App.</em></a>
      <ul style={{listStyleType:"square"}}>
        <li>Tech: Figma, React, Node.js, Express.js, MongoDB, Socket.io, Cloudinary, JS, Bootstrap, ApexCharts</li>
        <li><strong>Goal:</strong> <em>Monitor financial markets and connect investors</em></li>
        <li>GitHub version control while working on a team</li>
        <li><strong>Challenge:</strong> Adding Real-Time Ticker Chart</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Successfully Integrated ApexCharts, read documentation</li>
        <li>Deployed using Netlify  |  May 2023</li>
      </ul> */}

      <h4>Education</h4>
      <div className="sec-block">
        <ul>
          <li className="list-none"><strong><em>University of Washington</em></strong></li>
          <li className="list-none"><strong><em>2023 Graduate - Software Engineering Certificate</em></strong><span style={{ float: "right" }}><em>Seattle, WA</em></span></li>
        </ul>
        <p style={{ paddingLeft:"70px", maxWidth:"900px", fontSize: "16px"}}>  A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, jQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</p>
        <br />
        <ul>
          <li  className="list-none"><strong><em>Art Institute of Chicago</em></strong> <span style={{ float: "right" }}><em>Chicago, IL</em></span></li>
          <li className="list-none"><strong><em>2002 Bachelor of Fine Arts</em></strong></li> 
        </ul>
          <p style={{paddingLeft:"70px", maxWidth:"900px", fontSize: "16px", textTransform:"italic" }}>Honed verbal presentation, displayed strong ability to communicate design decisions, and learned to gracefully accept and apply constructive criticism.</p>
      </div>
      <h4>Relevant Experience</h4>
      <div className="sec-block">    
        <ul>
          <li className="list-none"><strong>Owner/Entrepreneur</strong></li>
          <li className="list-none">2012-2023</li>
          <li className="list-none"><strong>Hinge Gallery</strong><span style={{ float: "right" }}>Vashon, WA</span></li>
        </ul>
      </div>
      <p style={{ paddingLeft:"70px", maxWidth:"900px", fontSize: "16px"}}>This experience has equipped me with a keen understanding of client empathy, user experience design, and workflow optimizationnpm.</p>{" "}
      
      {/* <p>
        <strong>Key Accomplishments:</strong>
      </p>
      <ul>
        <li style={{ listStyle: "disc" }}>
        <strong>Primary Web Developer:</strong> Iteratively enhanced online presence and customer experience based on analytics data. 
        </li>
        <li style={{ listStyle: "disc" }}>
      	<strong>Established and Fostered Brand Image:</strong> Executed a thriving multichannel marketing strategy, achieving a steady 15.5% YoY client growth across print, digital, and video platforms.
        </li>
        <li style={{ listStyle: "disc" }}>
        <strong>Found and Applied Business Efficacy Tactics:</strong>	 Including supplier negotiations and vertical integration, resulting in 13.21% margin increase over two years.
        </li>
        <li style={{ listStyle: "disc" }}>
        <strong>Managed Teams:</strong> Established project processes, and ensured successful project delivery, demonstrating proficiency in client interaction, design, and execution.
        </li>
        <li style={{ listStyle: "disc" }}>
          {" "}
          <strong>Developed Pricing Model: </strong>	For the custom framing department that was client-focused, increasing transaction sizes by 13.8% YoY in the final year of operation.
        </li>
        <li style={{ listStyle: "disc" }}>
        <strong>Project Design and Development:</strong> Applied vertical integration strategies to enhance product performance and production efficiency.
        </li>
        <li style={{ listStyle: "disc" }}>
        <strong>Customer Obsessed:</strong>	 Proven to build and retain loyal client base.
        </li>
     
      </ul> */}
      {/* <h4>Additional Experience</h4>
      <ul>
        <li className="list-none"><strong>Co-Owner</strong></li>
        <li className="list-none">2005-2012</li>
        <li><strong>Alley Gallery</strong><span style={{ float: "right" }}>Evanston, IL</span></li>
      </ul>
      <ul>
        <li style={{ listStyle: "disc" }}>
        <strong>Operations Management:</strong>	 Including overseeing of 5 employees, ordering, product buying and participating in weekly officer meetings.
        </li>
        <li style={{ listStyle: "disc" }}>
        <strong>Custom framing designer:</strong> Customer service, and sales, successfully producing over $230k annually.
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          <strong>Director</strong>
        </li>
        <li>2003-2004</li>
        <li>
          <strong>Picture Perfect</strong><span style={{ float: "right" }}>Phoenix, AZ</span>
          
        </li>
      </ul>
      <ul>
        <li style={{ listStyle: "disc" }}>
        <strong>Consistently Surpassed the Monthly Sales Goal of $60k:</strong>	 In custom framing and fine art sales.
        </li>
        <li style={{ listStyle: "disc" }}>
        <strong>Oversee Staff:</strong>	 Four directs and report weekly to franchise owners.
        </li>
      </ul>
       */}
      <h4>Accolades</h4>
      <div className="sec-block">
        <p> 
          <stong>Best in class award </stong>- University of Washington Boot Camp
          Certificate Program UI/UX
        </p>
        <p style={{maxWidth:"900px", fontSize:"16px", marginLeft:"30px", marginBottom:"8px"}}>
          <em>
            “Brent, I must express my admiration for your ability to build on the
            skills you've learned thus far and create something so impressive! You
            went above and beyond by exemplifying neat and organized coding
            conventions while also deploying a thorough repository containing all
            necessary information!”{" "}
          </em>
        </p >
        <p style={{maxWidth:"900px", fontSize:"16px", marginLeft:"30px", marginBottom:"8px"}}>– UW Professor, Joe Rehfuss </p>
        <h4>Interests</h4> Chess, Oil painting | <a href="https://www.brenthouston.com/" style={{color: "var(--accent4)"}} rel="noreferrer" target="_blank">brenthouston.com</a>, Stock Trading. 
        league
        </div>
      </div>
    </div>
  );
}
