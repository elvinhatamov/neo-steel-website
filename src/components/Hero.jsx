import { Link } from 'react-router-dom';
import heroVideo from '../assets/logo/VIDEO.mp4';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">15 Years of Experience</div>
        <h1 className="hero-title">
          FROM BLUEPRINT TO BRILLIANCE
        </h1>
        <p className="hero-subtitle">
          Your trusted partner in steel fabrication and construction solutions. 
          Delivering excellence in every project with precision, quality, and dedication.
        </p>
        <div className="hero-cta">
          <Link to="/quote" className="btn btn-primary">
            Get a Quote
          </Link>
          <Link to="/about" className="btn btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
