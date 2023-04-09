function NavBar(props) {
  const { page, setPage } = props;
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-evenly">
        <li className="nav-item">
          <span
            onClick={() => setPage("about")}
            className={`nav-link ${page === "about" ? "active" : ""}`}
          >
            About Me
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => setPage("project")}
            className={`nav-link ${page === "project" ? "active" : ""}`}
          >
            Projects
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => setPage("contact")}
            className={`nav-link ${page === "contact" ? "active" : ""}`}
          >
            Contact
          </span>
        </li>
        <li className="nav-item">
          <span
            onClick={() => setPage("resume")}
            className={`nav-link ${page === "resume" ? "active" : ""}`}
          >
            Resume
          </span>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
