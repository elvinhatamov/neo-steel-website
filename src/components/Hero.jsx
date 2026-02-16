import './Hero.css';

const Hero = () => {
  const scrollToQuote = () => {
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
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
          <button className="btn btn-primary" onClick={scrollToQuote}>
            Get a Quote
          </button>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
