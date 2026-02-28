import { Link } from 'react-router-dom';
import { FaAward, FaHandshake, FaCog, FaCheckCircle } from 'react-icons/fa';
import serviceImageOne from '../assets/services/image1.png';
import serviceImageTwo from '../assets/services/image2.png';
import homeBackdrop from '../assets/logo/home_backend.png';
import './HomeHighlights.css';

const values = [
  {
    icon: <FaAward />,
    title: 'Safety',
    bgClass: 'home-value-card-safety',
    description:
      'Committed to a zero-incident culture through strict safety standards, training, and accountability.'
  },
  {
    icon: <FaHandshake />,
    title: 'Precision',
    bgClass: 'home-value-card-precision',
    description:
      'Delivering accurate fabrication and seamless fit-up through disciplined detailing and quality control.'
  },
  {
    icon: <FaCog />,
    title: 'Integrity',
    bgClass: 'home-value-card-integrity',
    description:
      'We conduct business with transparency and accountability, building lasting partnerships through trust and consistent performance.'
  },
  {
    icon: <FaCheckCircle />,
    title: 'Execution',
    bgClass: 'home-value-card-execution',
    description:
      'Through disciplined planning, precision fabrication, and coordinated field operations, we deliver structural steel projects safely, efficiently, and on schedule.'
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
        <div className="home-values-grid">
          {values.map((value, index) => (
            <article key={index} className={`home-value-card ${value.bgClass}`}>
              <div className="home-value-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
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