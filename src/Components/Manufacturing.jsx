import React from "react";

const Manufacturing = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section light-bg">
        <div className="container narrow">
          <h1>Manufacturing & Quality</h1>
          <p>
            Our manufacturing operations are designed to support precision
            rotogravure printing and consistent flexible packaging production
            for B2B applications.
          </p>
        </div>
      </section>

      {/* MANUFACTURING OVERVIEW */}
      <section className="section">
        <div className="container narrow">
          <h2>Manufacturing Capabilities</h2>
          <p>
            Nageshwar Flexipack Private Limited operates a process-driven
            manufacturing setup focused on quality, repeatability, and
            dependable output.
          </p>
          <p>
            Our facility supports rotogravure printing and flexible packaging
            manufacturing using structured workflows and controlled production
            parameters.
          </p>
        </div>
      </section>

      {/* PROCESS APPROACH */}
      <section className="section light-bg">
        <div className="container">
          <h2>Process-Driven Approach</h2>

          <div className="grid">
            <div>Structured Production Planning</div>
            <div>Material Handling & Control</div>
            <div>In-Process Quality Monitoring</div>
            <div>Print & Lamination Consistency Checks</div>
            <div>Final Output Verification</div>
          </div>
        </div>
      </section>

      {/* QUALITY */}
      <section className="section">
        <div className="container narrow">
          <h2>Quality Control Standards</h2>
          <p>
            Quality is integrated into every stage of our manufacturing process.
            Our operations comply with ISO 9001:2015 standards and follow
            defined quality control procedures.
          </p>
          <p>
            From raw material inspection to final product verification, each
            step is monitored to ensure consistency, reliability, and
            performance.
          </p>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="section light-bg">
        <div className="container narrow">
          <h2>Infrastructure & Systems</h2>
          <p>
            Our manufacturing infrastructure is designed to support stable
            production, controlled environments, and repeatable quality.
          </p>
          <p>
            We continuously focus on process discipline, equipment upkeep, and
            operational consistency to meet customer specifications.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Looking for a Reliable Manufacturing Partner?</h2>
          <p>
            Contact our team to discuss your flexible packaging and printing
            requirements.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default Manufacturing;
