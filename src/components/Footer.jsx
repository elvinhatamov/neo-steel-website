import { Link } from 'react-router-dom';
import './Footer.css';
import cwbGroupLogo from '../assets/certifications/cwb-group.svg';
import ossfaLogo from '../assets/certifications/ossfa.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <div className="footer-logo">
                <h3>NEO STEEL LTD</h3>
                <p className="footer-tagline">FROM BLUEPRINT TO BRILLIANCE</p>
              </div>
              <p className="footer-description">
                With 20 years of excellence in steel fabrication and construction, 
                we deliver quality solutions that stand the test of time.
              </p>
              <div className="footer-certifications" aria-label="Certifications">
                <span className="footer-certifications-label">Certifications</span>
                <div className="footer-certifications-icons">
                  <img src={cwbGroupLogo} alt="CWB Group certification" className="footer-certification-icon" />
                  <img src={ossfaLogo} alt="OSSFA certification" className="footer-certification-icon" />
                </div>
              </div>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Projects</Link></li>
                <li><Link to="/faq">Frequently Asked Questions</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/quote">Request a Quote</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Detailing &amp; Engineering</Link></li>
                <li><Link to="/services">Structural Steel Fabrication &amp; Erection</Link></li>
                <li><Link to="/services">Project Management</Link></li>
                <li><Link to="/services">Miscellaneous Metals</Link></li>
                <li><Link to="/services">Estimating</Link></li>
                <li><Link to="/services">Custom Fabrication</Link></li>
                <li><Link to="/services">AESS</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul className="footer-contact">
                <li>3640 Weston Road #8</li>
                <li>North York, ON M9L 1W2</li>
                <li>Phone: <a href="tel:+14165097711">(416) 509-7711</a></li>
                <li>Email: <a href="mailto:info@neosteel.ca">info@neosteel.ca</a></li>
                <li>Email: <a href="mailto:estimating@neosteel.ca">estimating@neosteel.ca</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} NEO STEEL LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
