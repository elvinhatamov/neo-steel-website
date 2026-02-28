import { Link } from 'react-router-dom';
import serviceImageOne from '../assets/services/image1.png';
import serviceImageTwo from '../assets/services/image2.png';
import homeBackdrop from '../assets/logo/home_backend.png';
import './HomeHighlights.css';

const missionCards = [
  {
    title: 'Our Mission',
    description:
      'Deliver dependable steel fabrication and installation through precision, coordination, and craftsmanship on every project.'
  },
  {
    title: 'Our Vision',
    description:
      'Be the trusted structural steel partner known for disciplined execution, consistent quality, and long-term client relationships.'
  },
  {
    title: 'Our Values',
    description:
      'We lead with safety, integrity, precision, and accountability while continuously improving how we build and deliver.'
  }
];

const pageCards = [
  {
    title: 'About Us',
    description:
      'Learn more about NEO STEEL LTD, our experience, and the standards that guide every project we deliver.',
    image: serviceImageOne,
    link: '/about'
  },
  {
    title: 'Our Services',
    description:
      'Explore our complete steel fabrication and installation capabilities across commercial and residential work.',
    image: serviceImageTwo,
    link: '/services'
  },
  {
    title: 'Our Projects',
    description:
      'View selected project work that reflects our quality, precision, and reliable field execution.',
    image: homeBackdrop,
    link: '/gallery'
  }
];

const HomeHighlights = () => {
  return (
    <section className="home-highlights section">
      <div className="container">
        <div className="mission-grid">
          {missionCards.map((card) => (
            <article key={card.title} className="mission-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="home-summary-head">
          <p>Precision, trust, and innovation.</p>
          <h2>Built on Strength, Driven by Quality</h2>
        </div>

        <div className="page-links-grid">
          {pageCards.map((card) => (
            <article key={card.title} className="page-link-card">
              <img src={card.image} alt={card.title} className="page-link-image" />
              <div className="page-link-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <Link to={card.link} className="page-link-btn">
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeHighlights;