import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                <li><a href="#hero" onClick={() => scrollToSection('hero')}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection('about')}>About Us</a></li>
                <li><a href="#services" onClick={() => scrollToSection('services')}>Services</a></li>
                <li><a href="#gallery" onClick={() => scrollToSection('gallery')}>Gallery</a></li>
                <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#services">Steel Fabrication</a></li>
                <li><a href="#services">Structural Steel</a></li>
                <li><a href="#services">Metal Working</a></li>
                <li><a href="#services">On-Site Installation</a></li>
                <li><a href="#services">Custom Design</a></li>
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
