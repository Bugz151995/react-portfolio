import { useState, useEffect } from "react";
import PageTitle from "./Components/PageTitle";

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
};

const container_lg = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "100%",
  margin: "0 2rem",
};

const aboutme_pic = {
  width: "16rem",
  borderRadius: "50%",
  boxShadow: "0px 0px 15px #bfbfc0",
};

const center_image = {
  display: "flex",
  justifyContent: "center",
};

const statement = {
  marginTop: "2rem",
};

const caption = {
  textAlign: "center",
  fontStyle: "italic",
  margin: "0 1rem 0 1rem",
  color: "#6c6c6f",
};

const bookmark = {
  display: "inline-block",
  backgroundColor: "#8f7d6d",
  color: "white",
  marginTop: "3rem",
  padding: '0.5rem',
  marginBottom: 0
};

const triangle = {
  width: "0",
  height: "0",
  borderTop: "18px solid transparent",
  borderBottom: "18px solid transparent",
  borderLeft: "18px solid #8f7d6d",
  
};

function ProfilePicture() {
  return (
    <div style={center_image}>
      <img
        src={require("./assets/aboutme_pic.jpg")}
        style={aboutme_pic}
        alt=""
      />
    </div>
  );
}

function Intro() {
  return (
    <>
      <p style={statement}>
        Hi! I am Ryan Czar Abugao, a freelance full stack web developer. I enjoy
        writing code, explore new technologies that is relevant today, and learn
        new things that is related to Information Technology. I am a proud
        graduate of Partido State University in which I obtained my Bachelor's
        Degree in Information Technology. My four years of study there was
        meaningful, I get to explore coding in C++ and later applied it on my
        personal projects which involves arduino.
      </p>
      <p style={caption}>
        "My passion and eagerness to learn new things never stops.""
      </p>
    </>
  );
}

function AboutMe() {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  return (
    <div style={!matches ? container : container_lg}>
      <PageTitle page_name="About Me" />

      <div style={{ margin: "auto 0" }}>
        <ProfilePicture />
        <Intro />

        <div style={{ display: "flex", alignItems: 'flex-end' }}>
          <h3 style={bookmark}>Work Experience</h3>
          <div style={triangle}>&nbsp;</div>
        </div>

        <ul>
          <li>CASURECO IV (2019)</li>
          <li>Breta Consulting Corporation (2021)</li>
          <li>Numisworks Auction Product Trading (2022)</li>
        </ul>

        <div style={{ display: "flex", alignItems: 'flex-end' }}>
          <h3 style={bookmark}>Seminars/Trainings</h3>
          <div style={triangle}>&nbsp;</div>
        </div>

        <ul>
          <li>Destination N.E.W (New and Exciting Work)</li>
          <li>How to write a winning Meta Descriptions on SEO</li>
          <li>Webcon on Information Security</li>
          <li>Software Testing Basics: Process to deliver Quality</li>
          <li>Data Visualization</li>
          <li>Privacy and Security In the New Normal</li>
          <li>OJT at CASURECO IV</li>
          <li>Introduction to Online Copywriting</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
