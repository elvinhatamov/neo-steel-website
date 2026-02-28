import { Link } from 'react-router-dom';
import serviceImageOne from '../assets/services/image1.png';
import serviceImageTwo from '../assets/services/image2.png';
import homeBackdrop from '../assets/logo/home_backend.png';
import './HomeHighlights.css';

const missionCards = [
  {
    title: 'Our Vision',
    description:
      'To be a trusted leader in structural steel solutions across the commercial, institutional, and industrial sectors — recognized for technical precision, disciplined execution, and long-term partnerships built on performance. We aim to elevate industry standards by delivering steel structures that combine strength, efficiency, and lasting value.'
  },
  {
    title: 'Our Mission',
    description:
      'Our mission is to provide integrated structural steel services — from detailing and engineering coordination through fabrication and erection — with full accountability and uncompromising quality. We are committed to delivering projects safely, on schedule, and to specification while maintaining transparent communication and strong collaboration with our clients and partners.'
  },
  {
    title: 'Our Strategy',
    description:
      'NEO STEEL LTD operates on a fully integrated model. By housing detailing, fabrication, project management, and field operations within one coordinated structure, we eliminate unnecessary handoffs and reduce project risk. Our strategy focuses on: constructability-driven design coordination, precision fabrication aligned with schedule demands, proactive site planning and trade integration, and clear communication with all project stakeholders.'
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