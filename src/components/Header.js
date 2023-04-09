import React from "react";
import NavBar from "./Nav";

function Header(props) {
  const { page, setPage } = props;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 py-lg-5">
      <div className="container-fluid">
        <span className="navbar-brand w-50" onClick={() => setPage("about")}>
          SAKTHIPRIYA LOGANATHAN
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <NavBar page={page} setPage={setPage} />
      </div>
    </nav>
  );
}
export default Header;
