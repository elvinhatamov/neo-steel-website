import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';

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
                With 15 years of excellence in steel fabrication and construction, 
                we deliver quality solutions that stand the test of time.
              </p>
            </div>

            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Steel Fabrication</Link></li>
                <li><Link to="/services">Structural Steel</Link></li>
                <li><Link to="/services">Metal Working</Link></li>
                <li><Link to="/services">On-Site Installation</Link></li>
                <li><Link to="/services">Custom Design</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact Info</h4>
              <ul className="footer-contact">
                <li>123 Industrial Drive</li>
                <li>Steel City, ST 12345</li>
                <li>Phone: <a href="tel:+15488816904">+1 (548) 881-6904</a></li>
                <li>Email: <a href="mailto:elnuradam701@gmail.com">info@neosteel.ca</a></li>
              </ul>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              </div>
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
