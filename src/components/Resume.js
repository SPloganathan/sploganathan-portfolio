import resume from "../assets/SAKTHIPRIYA.pdf";
function Resume() {
  return (
    <div className="container resume-container mt-3">
      <div className="row">
        <a
          href={resume}
          download="Sakthi Resume"
          target="_blank"
          rel="noreferrer"
        >
          Download My Resume
        </a>
      </div>
      <div className="row">
        <h2 className="title-text">FRONT-END PROFICIENCIES</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2 className="title-text">BACK-END PROFICIENCIES</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL,Sequelize</li>
          <li>NoSQL,MongoDB</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
