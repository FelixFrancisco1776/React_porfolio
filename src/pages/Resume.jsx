import React from "react";
import { Link } from "react-router-dom";
function Resume(props) {
  return (
    <div className="mx-5" style={{ color: "#f4f3ee" }}>
      <h1
        style={{
          fontFamily: "Black Ops One, cursive",
          fontSize: "70px",
          color: "#f4f3ee",
        }}
        className="content-name"
      >
        Resume
      </h1>
      <h3 style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
        Download my{" "}
        <a
          style={{
            fontFamily: "Bricolage Grotesque, sans-serif",
            textDecoration: "none",
            color: "#f4f3ee",
            fontWeight: "bold",
          }}

          href="add path to resume here"
          download={{}}
        >

          Resume
        </a>{" "}
        here!
      </h3>
      <div className="my-5">
        <h2 style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
          Front-end Proficiencies
          <img style={{ width: "100px" }}src="/html.png"/>
          <img style={{ width: "120px" }}src="/css.png"/>
          <img style={{ width: "100px" }}src="/javascript.png"/>
          <img style={{ width: "100px" }}src="/jquery.png"/>
          <img style={{ width: "100px" }}src="/react.png"/>
          <img style={{ width: "100px" }}src="/bootstrap.png"/>
        </h2>
        <ul
          style={{
            fontSize: "25px",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          <li>HTML</li> 
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
      </div>
      <div className="my-5">
        <h2 style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}>
          Back-end Proficiencies
          <img style={{ width: "100px" }}src="/api.png"/>
          <img style={{ width: "10px" }}src="/the part.png"/>
          <img style={{ width: "100px" }}src="/node.png"/>
          <img style={{ width: "10px" }}src="/the part.png"/>
          <img style={{ width: "100px" }}src="/mysql.png"/>
          <img style={{ width: "10px" }}src="/the part.png"/>
          <img style={{ width: "80px" }}src="/Sequelize.png"/>
          <img style={{ width: "10px" }}src="/the part.png"/>
          <img style={{ width: "150px" }}src="/express.png"/>
          <img style={{ width: "10px" }}src="/the part.png"/>
          <img style={{ width: "100px" }}src="/graphql.png"/>
        </h2>
        <ul
          style={{
            fontSize: "25px",
            fontFamily: "Bricolage Grotesque, sans-serif",
          }}
        >
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySql, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
