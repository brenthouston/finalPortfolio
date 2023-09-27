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
        <h2>Brent Houston</h2> <p style={{ margin: 0 }}>Seattle, WA</p>
        <p>Phone:773-988-2768 | Email: brentjustinhouston@gmail.com | <a href="https://www.linkedin.com/in/brent-houston-53291a13/">LinkedIn</a> | <a href="https://github.com/brenthouston">GitHub</a></p>
      </div>
      <div>
        <h4>Summary</h4> <strong>Part Artist, Part Engineer:</strong> <p>Fine arts grad turned entrepreneur, University of Washington Software graduate and recipient of the UX/UI Best in Class award. My entrepreneurial journey has reinforced my belief in a growth mindset and honed my soft skills. These skills have not only contributed to my success as a small business owner but also made me well-equipped to exceed expectations in web development and design.</p>
      </div>
      <h4>Technical Skills</h4>
      <p style={{ color: "var(--accent3)", margin: 0 }}>
        <strong>Languages:</strong> JavaScript, HTML, CSS, SQL
      </p>{" "}
      <p style={{ color: "var(--accent3)", margin: 0 }}>
        <strong>Tools:</strong> Node.js, jQuery, React, Node, MS Office, Adobe
        Creative Suite, VS Code
      </p>
      <h4>Education</h4>
      <ul>
        <li>
          {" "}
          <strong>Boot Camp Certificate</strong>
        </li>
        <li>
          {" "}
          <strong>University of Washington</strong><span style={{ float: "right" }}>Seattle, WA</span>
        </li>
      
      </ul>{" "}
      <div>   Seattle, WA A 24-week intensive program focused on gaining technical
      programming skills in HTML5, CSS3, Javascript, jQuery, Bootstrap,
      Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.</div>
   
      <br />
      <ul>
        <li>
          {" "}
          <strong>Art Institute of Chicago</strong> <span style={{ float: "right" }}>Chicago, IL</span>
       
        </li>

      </ul>{" "}
      Bachelor of Fine Arts (BFA)

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
      – UW Professor, Joe Rehfuss <h4>Interests</h4> Chess, Oil painting (<a href="https://www.brenthouston.com/">brenthouston.com</a>), Coed softball
      league
      </div>
    </div>
  );
}
