import React from "react";
import "../styles/style.css";
import ResDownload from "./ResDownload";

export default function Resume() {
  return (
    <div className="container resume col">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col">
            <h1 style={{ fontSize: 52 }}>Resume</h1>
          </div>
          <div className="col d-flex justify-content-end align-self-center" style={{ marginTop: '60px'}}>
            <ResDownload />
          </div>
        </div>
      </div>
      <div className="info row text-center">
        <h2>Brent Houston</h2> <p style={{ margin: 0 }}>Seattle, WA</p>
        <p>Phone:773-988-2768 | Email: brentjustinhouston@gmail.com </p>
      </div>
      <div>
        <h4>Summary</h4> Experienced Full Stack Developer with a diverse
        background including entrepreneurship and a fine arts degree from The
        School of the Art Institute of Chicago. Possesses a decade of experience
        as a successful picture framing business owner, with a proven track
        record of building a loyal client base, managing the supply chain, and
        overseeing projects from start to finish. Utilized discipline, focus,
        and teamwork skills developed as a collegiate baseball pitcher to excel
        in entrepreneurial endeavors. Self-taught in successful stock market
        trading, highlighting expertise in careful analysis and risk management.
        Recently made a career pivot to pursue a passion for software
        engineering, bringing project management experience and creativity to
        this new field. Eager to continue learning and growing while applying
        skills to contribute to a dynamic team.
      </div>
      <h4>Technical Skills</h4>
      <p style={{ color: "var(--accent3)", margin: 0 }}>
        <strong>Languages:</strong> JavaScript, HTML, CSS, SQL
      </p>{" "}
      <p style={{ color: "var(--accent3)", margin: 0 }}>
        <strong>Tools:</strong> Node.js, JQuery, React, Node, MS Office, Adobe
        Creative Suite
      </p>
      <h4>Relevant Experience</h4>{" "}
      <ul>
        <li>
          {" "}
          <strong>Owner/Entrepreneur</strong>
        </li>
        <li>2012-2020</li>
        <li>
          <strong>Hinge Gallery</strong>{" "}
          <p style={{ textAlign: "right" }}>Chicago,IL</p>{" "}
        </li>
      </ul>
      <p>
        As an entrepreneur with a fine arts background, I’ve implemented
        innovative marketing strategies, grown client bases, and optimized
        profit margins through efficient business strategies and strong
        communication and customer service skills. I’m experienced in managing
        teams, establishing project processes, and leveraging vertical
        integration strategies to improve product performance and streamline
        production processes. These skills are transferable to software
        engineering roles, where I’d develop software solutions, manage
        projects, and collaborate with cross-functional teams. My expertise in
        multi-channel marketing and digital mediums would be valuable in
        promoting software applications to target audiences. My diverse skill
        set and experience make me a strong candidate for software engineering
        roles.{" "}
      </p>
      <p>
        <strong>Key Accomplishments:</strong>
      </p>
      <ul>
        <li style={{ listStyle: "disc" }}>
          Implement innovative marketing strategies that result in a pre-COVID
          annual gross revenue increase of +36% YoY by building the company's
          branding from scratch.
        </li>
        <li style={{ listStyle: "disc" }}>
          Develop and implemented successful multi-channel marketing strategy
          resulting in a 15.5% YoY increase in client base, utilizing print,
          digital, and video mediums.
        </li>
        <li style={{ listStyle: "disc" }}>
          Grow transaction size by 13.8% YoY in last year of operation by
          developing customer-centric pricing model.
        </li>
        <li style={{ listStyle: "disc" }}>
          Identify business efficiency strategies (supplier negotiation
          opportunities and vertical integration) resulting in 13.21% margin
          increase over 2 years.
        </li>
        <li style={{ listStyle: "disc" }}>
          {" "}
          Manage team, establish processes for project design, execution, and
          presentation, resulting in successful client interactions and project
          delivery.
        </li>
        <li style={{ listStyle: "disc" }}>
          Create pricing model for custom framing department with good, better,
          best options.
        </li>
        <li style={{ listStyle: "disc" }}>
          Developed ordering management system to manage suppliers and track
          customer ordering. Source and negotiate with 30+ retail inventory and
          material suppliers to optimize procurement and increase profit
          margins.
        </li>
        <li style={{ listStyle: "disc" }}>
          Demonstrate expertise in product design, development, and creation,
          leveraging vertical integration strategies to improve product
          performance and streamline production processes.
        </li>
        <li style={{ listStyle: "disc" }}>
          Foster strong partnerships and referrals with customers and
          stakeholders through exceptional communication and customer service
          skills.
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
          <strong>Alley Gallery</strong>{" "}
          <p style={{ textAlign: "right" }}>Evanston,IL</p>{" "}
        </li>
      </ul>
      <ul>
        <li style={{ listStyle: "disc" }}>
          Operations management including overseeing of 5 employees, ordering,
          product buying and participating in weekly officer meetings.
        </li>
        <li style={{ listStyle: "disc" }}>
          Custom framing design, customer service, and sales, successfully
          producing ove $230k annually.
        </li>
      </ul>
      <ul>
        <li>
          {" "}
          <strong>Director</strong>
        </li>
        <li>2003-2004</li>
        <li>
          <strong>Picture Perfect</strong>{" "}
          <p style={{ textAlign: "right" }}>Phoenix, AZ</p>{" "}
        </li>
      </ul>
      <ul>
        <li style={{ listStyle: "disc" }}>
          Responsible for custom framing and fine art sales consistently
          exceeded goal of 60k projected monthly forecast.
        </li>
        <li style={{ listStyle: "disc" }}>
          Oversee staff of 4 and provide franchise owners with weekly status
          reports.
        </li>
      </ul>
      <h4>Education</h4>
      <ul>
        <li>
          {" "}
          <strong>Boot Camp Certificate</strong>
        </li>
        <li>
          {" "}
          <strong>University of Washington</strong>
        </li>
        <p style={{ textAlign: "right" }}>Phoenix, AZ</p>
      </ul>{" "}
      Seattle, WA A 24-week intensive program focused on gaining technical
      programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap,
      Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.
      <ul>
        <li>
          {" "}
          <strong>Art Institute of Chicago</strong>
        </li>

        <p style={{ textAlign: "right" }}>Chicago, IL</p>
      </ul>{" "}
      Bachelor of Fine Arts (BFA)
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
      – UW Professor, Joe Rehfuss <h4>Interests</h4> Chess (Rating 1617), Day
      Trading & Swing Trading, Oil painting (brenthouston.com), Coed softball
      league
    </div>
  );
}
