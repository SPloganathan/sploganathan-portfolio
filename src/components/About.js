import React from "react";
import img from "../assets/sakthi1.JPG";

function About() {
  return (
    <div className="container mt-3">
      <h2>ABOUT ME</h2>
      <div>
        <img src={img} className="avatar" alt="avatar" />
      </div>
      <div>
        Hello! I'm SAKTHIPRIYA LOGANATHAN and I love creating things that live
        on the internet. I love working on the web to a great extent and making
        sure it continues to be a place for everyone and our creative, personal,
        and weird passions. I enjoy using my obsessive attention to detail,love
        for making things work, and my mission-driven work ethic to literally
        change the world. When I am not writing codes, I enjoy traveling, movies
        and love to do arts. Here are few technologies I've been working with
        recently: JavaScript, Node.js, HTML5, Cascading Style Sheets(CSS),
        React.js, MongoDB
      </div>
    </div>
  );
}

export default About;
