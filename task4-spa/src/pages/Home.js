import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero fade-in">
        <h1>Welcome to Codveda SPA</h1>
        <p>A modern Single Page Application built with React and REST APIs</p>
        <Link to="/about" className="btn">Learn More</Link>
      </section>

      {/* Features Section */}
      <section className="features fade-in">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>⚡ Fast</h3>
            <p>Experience smooth navigation with React’s Single Page Application architecture.</p>
          </div>
          <div className="feature-card">
            <h3>🔗 API Powered</h3>
            <p>Integrated with REST APIs for real-world dynamic data fetching.</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive</h3>
            <p>Optimized for mobile, tablet, and desktop for a seamless experience everywhere.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
