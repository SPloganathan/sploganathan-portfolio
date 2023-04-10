import { useState } from "react";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import Resume from "./components/Resume";
import About from "./components/About";

import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  // maintaining the current page using 'usestate'hook
  const [page, setPage] = useState("about");
  return (
    <div className="App">
      {/* Header should be visible across all pages so its not conditionally rendered. */}
      <Header page={page} setPage={setPage} />
      {/* rest all other pages are conditionally rendered based on th page variable */}
      {page === "about" && <About />}
      {page === "project" && <Project />}
      {page === "contact" && <Contact />}
      {page === "resume" && <Resume />}
      <Footer />
    </div>
  );
}
