import React from "react";
import "../styles/style.css";
import ResDownload from "./ResDownload";

export default function Resume() {
  return (
      <div className="info">
    <div className="container resume col">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <h1 style={{ fontSize: "52px" }}>Resume</h1>
          </div>
          <div className="col d-flex justify-content-end align-self-center" style={{ marginTop: '60px'}}>
            <ResDownload />
          </div>
        </div>
      </div>
      <div className=" row mx-auto text-center">
        <h2>Brent Houston</h2> <p style={{ margin: 0 }}>Fayetteville, AR</p>
        <p>Phone: 773-988-2768 | Email: brentjustinhouston@gmail.com | <a href="https://www.linkedin.com/in/brent-houston-53291a13/" style={{color: "var(--accent4)", }}>LinkedIn</a> | <a href="https://github.com/brenthouston" style={{color: "var(--accent4)"}}>GitHub</a></p>
      </div>
      <div>
        <h4>Summary</h4>         <p>Currently at Sharp Hue, I specialize in PHP, WordPress, Shopify, HTML, CSS, JavaScript, and jQuery, with experience supporting ASP.NET web applications. As a University of Washington Software graduate and <strong>UX/UI Best in Class</strong> award recipient, I bring a solid technical foundation and a sharp eye for design. My experience as a small business owner developed essential skills in leadership, communication, and client management, enhancing my ability to collaborate effectively and deliver impactful solutions in web development.
        </p>
      </div>
      <h4>Technical Skills</h4>
      <p style={{ color: "var(--accent1)", margin: 0 }}>
        <strong>Languages:</strong> JavaScript, HTML, CSS, SQL
      </p>{" "}
      <p style={{ color: "var(--accent1)", margin: 0 }}>
        <strong>Tools:</strong> Node.js, jQuery, React, Node, MS Office, Adobe
        Creative Suite, VS Code
      </p>
      <h4>Education</h4>
      <ul>
        <li>
          {" "}
          <strong><em>University of Washington</em></strong>
        </li>
        <li>
          {" "}
          <strong><em>2023 Graduate - Software Engineering Certificate</em></strong><span style={{ float: "right" }}><em>Seattle, WA</em></span>
        </li>
      
      </ul>{" "}
      <li>  A 24-week intensive program focused on gaining technical
      programming skills in HTML5, CSS3, Javascript, jQuery, Bootstrap,
      Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</li>
   
      <br />
      <ul>
        <li>
          {" "}
          <strong><em>Art Institute of Chicago</em></strong> <span style={{ float: "right" }}><em>Chicago, IL</em></span>
       
        </li>

     <li>
      <strong><em>2002 Bachelor of Fine Arts</em></strong>
      </li> 
      </ul>{" "}
        <li>
        Honed verbal presentation, displayed strong ability to communicate design decisions, and leard to gracefully accept and apply constructive criticism.
        </li>

      <h4>Projects</h4>{" "}

     <a href="https://brenthouston.github.io/Cosmic-Daily/" style={{color: "var(--accent4)"}} target="_blank" rel="search"><strong >Cosmic Daily:</strong><em>  Explore the Universe, one day at a time.</em></a>
      <ul style={{listStyleType:"square"}}>
        <li>Tech: VS Code, Excalidraw, HTML5, CSS, JS, DayJS, Photoshop, Materialize</li>
        <li><strong>Goal:</strong> <em>Explore NASA's daily space images</em></li>
        <li>GitHub version control while working on a team</li>
        <li>Fetched NASA's Picture of the Day and data</li>
        <li><strong>Challenge:</strong> User-friendly date selection</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Used Materialize date picker, read documentation</li>
        <li>Deployed using GitHub Pages  |  Apr 2023</li>
      </ul>
     <a href="https://finnhub.netlify.app/login" style={{color: "var(--accent4)"}} target="_blank" rel="search"><strong >FinHub:</strong><em>  Financial Markets Monitoring and Social Media App.</em></a>
      <ul style={{listStyleType:"square"}}>
        <li>Tech: Figma, React, Node.js, Express.js, MongoDB, Socket.io, Cloudinary, JS, Bootstrap, ApexCharts</li>
        <li><strong>Goal:</strong> <em>Monitor financial markets and connect investors</em></li>
        <li>GitHub version control while working on a team</li>
        <li><strong>Challenge:</strong> Adding Real-Time Ticker Chart</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Successfully Integrated ApexCharts, read documentation</li>
        <li>Deployed using Netlify  |  May 2023</li>
      </ul>
     <a href="https://brenthouston.netlify.app/" style={{color: "var(--accent4)"}} target="_blank" rel="search"><strong >Web Dev Portfolio</strong></a>
      <ul style={{listStyleType:"square"}}>
        <li>Tech: VS Code, React, Node.js, @EmailJS, Bootstrap, Photoshop</li>
        <li><strong>Goal:</strong> <em>Showcase web deveopment work</em></li>
        <li><strong>Challenge:</strong> Routing user comments to my personal email</li>
        <li style={{textIndent:"15px", listStyleType: "circle"}}><strong>Solution:</strong> Researching and implementing @EmailJS to achieve this</li>
        <li>Deployed using Netlify  |  May 2023</li>
      </ul>
      <h4>Relevant Experience</h4>{" "}
      <ul>
        <li>
          {" "}
          <strong>Owner/Entrepreneur</strong>
        </li>
        <li>2012-2023</li>
        <li>
          <strong>Hinge Gallery</strong><span style={{ float: "right" }}>Vashon, WA</span>
         
        </li>
      </ul>
      <p>
      <em>This experience has equipped me with a keen understanding of client empathy, user experience design, and marketing – all of which I'm eager to leverage in the field of web development:</em>{" "}
      </p>
      <p>
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
     
      </ul>
      <h4>Additional Experience</h4>
      <ul>
        <li>
          {" "}
          <strong>Co-Owner </strong>
        </li>
        <li>2005-2012</li>
        <li>
          <strong>Alley Gallery</strong><span style={{ float: "right" }}>Evanston, IL</span>
          
        </li>
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
      
      <h4>Accolades</h4>
      <p>
        <stong>Best in class award </stong>- University of Washington Boot Camp
        Certificate Program UI/UX
      </p>
      <em>
        “Brent, I must express my admiration for your ability to build on the
        skills you've learned thus far and create something so impressive! You
        went above and beyond by exemplifying neat and organized coding
        conventions while also deploying a thorough repository containing all
        necessary information!”{" "}
      </em>
      – UW Professor, Joe Rehfuss <h4>Interests</h4> Chess, Oil painting (<a href="https://www.brenthouston.com/" style={{color: "var(--accent4)"}} rel="search" target="_blank">brenthouston.com</a>), Coed softball
      league
      </div>
    </div>
  );
}
