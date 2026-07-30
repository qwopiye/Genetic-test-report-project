import React from "react";
import "./home.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";


const SEQUENCE = "Genetic Test System";

const SequenceStrip = ({ reverse = false }) => (
  <div className={`sequence-strip ${reverse ? "reverse" : ""}`} aria-hidden="true">
    <div className="sequence-track">
      {[...SEQUENCE, ...SEQUENCE].map((base, i) => (
        <span key={i} className={`base base-${base}`}>
          {base}
        </span>
      ))}
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Services />
      <Footer />
      <Footers/>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <SequenceStrip />

      <div className="hero-content">
        <span className="hero-eyebrow">DNA ANALYSIS · AI PREDICTION · CLINICAL GRADE</span>

        <h1>
          Genetic Test Report
          <br />
          with AI Prediction
        </h1>

        <p>
          Advanced medical AI system for DNA analysis, cancer prediction,
          and genetic disease detection — built for clinics and diagnostic
          labs that need answers they can trust.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" ><a href="/dashboard">Get Started</a></button>
          <button className="btn-ghost">See sample report</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-value">99.2%</span>
            <span className="stat-label">Model accuracy</span>
          </div>
          <div className="stat">
            <span className="stat-value">5,000+</span>
            <span className="stat-label">Samples trained on</span>
          </div>
          <div className="stat">
            <span className="stat-value">&lt;24h</span>
            <span className="stat-label">Report turnaround</span>
          </div>
        </div>
      </div>

      <SequenceStrip reverse />
    </section>
  );
};

const treatments = [
  {
    name: "Blood Test",
    price: 200,
    tag: "Standard",
    note: "Baseline panel for routine screening",
  },
  {
    name: "DNA Test",
    price: 5000,
    tag: "Diagnostic",
    note: "Full sequencing with variant report",
  },
  {
    name: "Cancer Prediction Test",
    price: 10000,
    tag: "AI Prediction",
    note: "ML risk scoring across known markers",
  },
  {
    name: "Prenatal Genetic Test",
    price: 7000,
    tag: "Diagnostic",
    note: "Non-invasive screening for common conditions",
  },
  {
    name: "Paternity DNA Test",
    price: 12000,
    tag: "Standard",
    note: "Legally admissible relationship testing",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <span className="section-eyebrow">Pricing</span>
        <h2>Medical Services &amp; Pricing</h2>
        <p>Every report below is generated and reviewed before it reaches a patient.</p>
      </div>

      <div className="service-grid">
        {treatments.map((t) => (
          <div className="service-card" key={t.name}>
            <div className="service-card-top">
              <span className={`tag tag-${t.tag.replace(/\s+/g, "-").toLowerCase()}`}>
                {t.tag}
              </span>
              <span className="price">
                <span className="price-currency">৳</span>
                {t.price.toLocaleString()}
              </span>
            </div>
            <h3>{t.name}</h3>
            <p>{t.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <SequenceStrip />

      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Genetic AI</span>
          <p>Diagnostic intelligence for the next generation of care.</p>
        </div>

        <div className="footer-meta">
          <div className="social">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook className="icon" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin className="icon" /></a>
          </div>
          <p className="phone">096167382 &nbsp;|&nbsp; 01723578904</p>
          <a href="/privacy-policy" className="privacy-link">Privacy Policy</a>
        </div>
      </div>

      <p className="copyright">© {new Date().getFullYear()} Genetic AI Lab</p>
    </footer>
  );
};



const Footers = () => {
  return (
    <footer className="footer">

      <div className="social">
        <FaFacebook className="icon" />
        <FaLinkedin className="icon" />
      </div>

      <p>© {new Date().getFullYear()} Genetic AI Lab</p>

      <p>📞 096167382 | 01723578904</p>

      <a href="/privacy-policy">Privacy Policy</a>

    </footer>
  );
};

export default Home;