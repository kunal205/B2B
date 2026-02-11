import React from "react";

const Products = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section light-bg">
        <div className="container narrow">
          <h1>Products & Solutions</h1>
          <p>
            We manufacture high-quality flexible packaging solutions using
            rotogravure printing and precision laminate structures, supplied as
            per customer specifications.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="container narrow">
          <h2>Flexible Packaging Solutions</h2>
          <p>
            Our product portfolio includes flexible laminates manufactured using
            combinations of plastic, aluminum, and paper-based materials. These
            structures are designed to meet functional, barrier, and performance
            requirements across multiple applications.
          </p>
        </div>
      </section>

      {/* LAMINATE STRUCTURES */}
      <section className="section light-bg">
        <div className="container">
          <h2>Laminate Structures Offered</h2>

          <div className="grid">
            <div>PET / PE</div>
            <div>PET / MET PET / PE</div>
            <div>PET / Foil / PE</div>
            <div>PET / CPP</div>
            <div>PET / BOPP (Natural, White & Metalized)</div>
            <div>BOPP / BOPP</div>
            <div>BOPP / CPP</div>
            <div>BOPP / PE (Natural, White & Metalized)</div>
            <div>CPP / PP</div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="section">
        <div className="container narrow">
          <h2>Applications</h2>
          <p>
            Our flexible packaging solutions are used across a range of business
            applications, including:
          </p>

          <ul className="application-list">
            <li>Food Packaging</li>
            <li>FMCG Packaging</li>
            <li>Industrial Packaging</li>
            <li>Consumer Goods Packaging</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Discuss Your Packaging Requirements</h2>
          <p>
            Contact our team to evaluate laminate structures and specifications
            suitable for your application.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Products;
