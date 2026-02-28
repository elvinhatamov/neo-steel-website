import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo/logo.png';
import './Navigation.css';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const navItems = [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/gallery' },
    { label: 'Frequently Asked Questions', to: '/faq' },
    { label: 'Contact', to: '/contact' }
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Neo Steel LTD">
          <div className="logo-content">
            <img src={logo} alt="Neo Steel LTD logo" className="logo-image" />
            <div className="logo-text">
              <span className="logo-main">NEO STEEL LTD</span>
              <span className="logo-tagline">FROM BLUEPRINT TO BRILLIANCE</span>
            </div>
          </div>
        </Link>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <li key={`${item.label}-${item.to}`}>
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="nav-cta">
            <Link 
              to="/quote"
              className="nav-cta-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request a Quote
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
