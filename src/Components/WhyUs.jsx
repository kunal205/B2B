import React from "react";

const WhyUs = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section light-bg">
        <div className="container narrow">
          <h1>Why Choose Us</h1>
          <p>
            We operate with a clear focus on quality, process discipline, and
            dependable execution to support long-term B2B partnerships.
          </p>
        </div>
      </section>

      {/* CORE REASONS */}
      <section className="section">
        <div className="container">
          <h2>Our Core Strengths</h2>

          <div className="grid">
            <div>
              <strong>ISO 9001:2015 Certified Operations</strong>
              <p>
                Our manufacturing and quality systems comply with ISO 9001:2015
                standards, ensuring controlled and consistent production.
              </p>
            </div>

            <div>
              <strong>Rotogravure Printing Expertise</strong>
              <p>
                We specialize in rotogravure printing and flexible packaging,
                supported by process-driven manufacturing practices.
              </p>
            </div>

            <div>
              <strong>Consistent Quality Output</strong>
              <p>
                Quality is monitored at every stage, from material handling to
                final output verification.
              </p>
            </div>

            <div>
              <strong>B2B Manufacturing Focus</strong>
              <p>
                We work exclusively with business clients, understanding the
                importance of specifications, timelines, and repeatability.
              </p>
            </div>

            <div>
              <strong>Reliable Execution</strong>
              <p>
                Our operations are designed to support stable production,
                controlled processes, and dependable delivery commitments.
              </p>
            </div>

            <div>
              <strong>Customer-Centric Approach</strong>
              <p>
                We collaborate closely with customers to understand application
                requirements and deliver suitable packaging solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPERATIONAL APPROACH */}
      <section className="section light-bg">
        <div className="container narrow">
          <h2>How We Work</h2>
          <p>
            Our approach is built around clear communication, technical
            understanding, and disciplined execution.
          </p>
          <p>
            Each order is handled with attention to specifications, quality
            standards, and production consistency.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>Looking for a Dependable Packaging Manufacturer?</h2>
          <p>
            Contact our team to discuss your flexible packaging and rotogravure
            printing requirements.
          </p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
