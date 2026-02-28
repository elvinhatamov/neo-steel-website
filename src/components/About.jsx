import './About.css';
import cwbGroupLogo from '../assets/certifications/cwb-group.svg';
import ossfaLogo from '../assets/certifications/ossfa.svg';

const About = () => {
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

  const certifications = [
    {
      name: 'CWB Group',
      logo: cwbGroupLogo
    },
    {
      name: 'Ontario Structural Steel Fabricators Association (OSSFA)',
      logo: ossfaLogo
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About NEO STEEL LTD</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>20 Years of Steel Industry Excellence</h3>
            <p>
              NEO STEEL LTD has been at the forefront of the steel fabrication industry for over 20 years, 
              delivering exceptional solutions to our clients. Our commitment to quality, precision, and 
              innovation has made us Next-Generation Fabrication. Experienced Execution. Outstanding Quality.
            </p>
            <p>
              From blueprint to brilliance, we transform your vision into reality. Our team of skilled 
              professionals combines decades of experience with state-of-the-art technology to ensure 
              every project meets the highest standards of excellence.
            </p>
            <p>
              Serving the commercial, institutional, and industrial markets, NEO STEEL LTD combines 
              technical knowledge, precision fabrication, and disciplined field execution to deliver 
              structural excellence on every project.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="about-mission-grid">
          {missionCards.map((card) => (
            <article key={card.title} className="about-mission-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>

        <div className="about-certifications">
          <h3 className="certifications-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((item, index) => (
              <div key={index} className="certification-card">
                <img src={item.logo} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
