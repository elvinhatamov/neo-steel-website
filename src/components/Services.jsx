import './Services.css';
import { Link } from 'react-router-dom';
import serviceImageOne from '../assets/services/image1.png';
import serviceImageTwo from '../assets/services/image2.png';

const Services = () => {
  const serviceSections = [
    {
      title: 'Steel Fabrication',
      description:
        'Custom steel fabrication services for industrial and commercial projects with precision-built components tailored to exact specifications, finishes, and site conditions.',
      services: [
        'Detailing and engineering from concept through fabrication',
        'Structural steel fabrication and erection',
        'Project management with proactive coordination and scheduling'
      ],
      image: serviceImageOne,
      imageAlt: 'Structural steel framework under construction'
    },
    {
      title: 'Structural Steel',
      description:
        'Structural steel solutions for buildings, bridges, and infrastructure projects of any scale, delivered with strict quality control and dependable execution.',
      services: [
        'Miscellaneous metals including stairs, guardrails, ladders, and custom supports',
        'Estimating with detailed take-offs and transparent pricing',
        'Custom fabrication for specialized components and prototypes'
      ],
      image: serviceImageTwo,
      imageAlt: 'Custom steel stair and railing system'
    },
    {
      title: 'Metal Working',
      description:
        'Expert metal working services including cutting, welding, and finishing to exact project specifications for architectural and structural applications.',
      services: [
        'AESS (Architecturally Exposed Structural Steel) for visible, design-led structures',
        'Surface preparation and refined finishing for exposed steel components',
        'On-site installation support with coordinated field execution'
      ],
      image: serviceImageOne,
      imageAlt: 'Large fabricated steel project in progress'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="services-heading">Our Services</h2>

        <p className="services-intro">
          Precision in Fabrication. Discipline in Execution. Strength in Every Structure.
        </p>

        <p className="services-intro">
          NEO STEEL LTD offers a comprehensive range of steel fabrication and construction services tailored
          to meet the unique needs of each project. Through coordinated detailing, disciplined production,
          and experienced field execution, we provide practical solutions that protect quality, schedule,
          and long-term performance.
        </p>

        <div className="services-list">
          {serviceSections.map((section) => (
            <article key={section.title} className="service-row">
              <div className="service-image-wrap">
                <img src={section.image} alt={section.imageAlt} className="service-image" />
              </div>

              <div className="service-content">
                <h3>{section.title}</h3>
                <p>{section.description}</p>

                <p className="service-list-title">Services include:</p>
                <ul className="service-items">
                  {section.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>

                <Link to="/quote" className="service-quote-btn">
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
