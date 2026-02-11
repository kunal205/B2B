import React from "react";

const ContactUs = () => {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="section light-bg">
        <div className="container narrow">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team to discuss your flexible packaging and
            rotogravure printing requirements.
          </p>
        </div>
      </section>

      {/* CONTACT DETAILS + FORM */}
      <section className="section">
        <div className="container contact-grid">
          {/* LEFT: CONTACT INFO */}
          <div>
            <h2>Manufacturing Unit</h2>
            <p>
              <strong>Nageshwar Flexipack Private Limited</strong>
              <br />
              B-6, Site 4, Panki Industrial Area
              <br />
              Kanpur, Uttar Pradesh 208020
              <br />
              India
            </p>

            <p>
              <strong>Certification:</strong> ISO 9001:2015 Certified Company
            </p>
          </div>

          {/* RIGHT: FORM */}
          <div>
            <h2>Business Inquiry</h2>

            <form className="contact-form">
              <input type="text" placeholder="Company Name" required />
              <input type="text" placeholder="Contact Person" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />

              <textarea
                rows="4"
                placeholder="Briefly describe your packaging requirement"
              ></textarea>

              <button type="submit" className="btn-primary">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="section light-bg">
        <div className="container">
          <h2>Location</h2>

          <div className="map-wrap">
            <iframe
              title="Nageshwar Flexipack Location"
              src="https://www.bing.com/maps?where=B-6%2C%20Site%204%2C%20Panki%20Industrial%20Area%2C%20Kanpur%2C%20Uttar%20Pradesh%20208020%2C%20IN"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
