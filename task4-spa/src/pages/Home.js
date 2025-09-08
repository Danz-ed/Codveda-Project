import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero fade-in">
      <h1>Welcome to Codveda SPA</h1>
      <p>A modern Single Page Application built with React and REST APIs</p>
      <Link to="/about" className="btn">Learn More</Link>
    </section>
  );
}

export default Home;
