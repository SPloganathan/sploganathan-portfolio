import resume from "../assets/SAKTHIPRIYA.pdf";
function Resume() {
  return (
    <div className="container mt-3">
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
        <h2>Front end Proficiency</h2>
      </div>
    </div>
  );
}

export default Resume;
