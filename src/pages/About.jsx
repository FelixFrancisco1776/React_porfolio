import { React } from "react";
function About(props) {
    return (
        <div className="container-fluid" style={{ color: "#f4f3ee" }}>
            <h1 style={{ fontFamily: "Black Ops One, cursive" }}>About Me</h1>
            <img
                style={{ width: "150px" }}
                src="/Felix.jpg"
                alt="me"
            />
            <article
                style={{
                    fontSize: "35px",
                    fontFamily: "Bricolage Grotesque, sans-serif",
                }}
            >
 Greetings! I'm Felix Francisco, an aspiring full stack developer with background in customer support. Skilled in HTML, CSS, JavaScript, and Node.js. Quick learner seeking to expand knowledge of React, Angular, and MongoDB. Creative problem-solver who thrives in collaborative environments. Excellent communication and analytical abilities. Passionate about developing innovative web applications and enhancing user experiences. Eager to join a dynamic team, exchange ideas, and continue learning. Motivated to leverage technical and interpersonal skills in new full stack development roles.
            </article>
        </div>
    );
}
export default About;
