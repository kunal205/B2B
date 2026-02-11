import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="slider">
          <img
            className="slide slide1"
            src="/pexels-criiv-9550363.jpg"
            alt=""
          />
          <img
            className="slide slide2"
            src="/zoshua-colah-MkkKNtS8fYQ-unsplash.jpg"
            alt=""
          />
          <img src="/0ca417c41fe4fb4e2e7e_808xFull.webp" alt="" />
        </div>
        <div className="container hero-content">
          <h1>Rotogravure Printing & Flexible Packaging Solutions</h1>
          <p>
            ISO 9001:2015 certified manufacturer delivering precision,
            consistency, and reliable flexible packaging solutions for B2B
            clients.
          </p>

          <div className="hero-actions">
            <a href="/contact" className="btn-primary">
              Request a Quote
            </a>
          </div>

          <div className="iso-badge">ISO 9001:2015 Certified Company</div>
        </div>
      </section>

      {/* TRUST STATS */}
      {/* TRUST STATS */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <h3>4+ Years</h3>
            <p>Industry Experience</p>
          </div>

          <div className="stat-card">
            <h3>Rotogravure</h3>
            <p>Precision Printing</p>
          </div>

          <div className="stat-card">
            <h3>B2B Focus</h3>
            <p>Industrial Packaging</p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container narrow">
          <h2>About Nageshwar Flexipack</h2>
          <p>
            Nageshwar Flexipack Private Limited is a Kanpur-based flexible
            packaging manufacturer specializing in rotogravure printing and
            high-performance laminate structures.
          </p>
          <p>
            Our manufacturing processes are driven by quality control, material
            integrity, and dependable execution.
          </p>
          <button
            onClick={() => {
              navigate("/about");
            }}
            className="btn-primary"
          >
            learn more
          </button>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section light-bg">
        <div className="container">
          <h2>Our Manufacturing Capabilities</h2>

          <div className="grid">
            <div>Rotogravure Printing</div>
            <div>Flexible Packaging & Lamination</div>
            <div>Custom Laminate Structures</div>
            <div>Quality-Controlled Production</div>
            <div>B2B Order Fulfilment</div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <h2>Flexible Packaging Solutions</h2>
          <p className="muted">
            High-quality flexible laminates manufactured using plastic,
            aluminum, and paper-based structures.
          </p>

          <div className="grid">
            <span>PET / PE</span>
            <span>PET / MET PET / PE</span>
            <span>PET / Foil / PE</span>
            <span>BOPP / PE</span>
            <span>BOPP / CPP</span>
          </div>

          <a href="/products" className="btn-outline">
            View All Products
          </a>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section light-bg">
        <div className="container">
          <h2>Industries We Serve</h2>

          <div className="grid">
            <div>Food Packaging</div>
            <div>FMCG Packaging</div>
            <div>Industrial Packaging</div>
            <div>Consumer Goods Packaging</div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section">
        <div className="container narrow">
          <h2>Quality & Compliance</h2>
          <p>
            Our operations comply with ISO 9001:2015 standards and follow a
            process-driven quality control system to ensure consistent and
            reliable output.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Looking for a Reliable Packaging Manufacturing Partner?</h2>
          <p>
            Contact our team to discuss your flexible packaging requirements.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
