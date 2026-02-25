import { FaAward, FaHandshake, FaCog, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: "Safety",
      description: "Committed to a zero-incident culture through strict safety standards, training, and accountability."
    },
    {
      icon: <FaHandshake />,
      title: "Precision",
      description: "Delivering accurate fabrication and seamless fit-up through disciplined detailing and quality control."
    },
    {
      icon: <FaCog />,
      title: "Integrity",
      description: "We conduct business with transparency and accountability, building lasting partnerships through trust and consistent performance."
    },
    {
      icon: <FaCheckCircle />,
      title: "Execution",
      description: "Through disciplined planning, precision fabrication, and coordinated field operations, we deliver structural steel projects safely, efficiently, and on schedule."
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

        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
