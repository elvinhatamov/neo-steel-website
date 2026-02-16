import { FaAward, FaHandshake, FaCog, FaCheckCircle } from 'react-icons/fa';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description: "Committed to delivering the highest quality in every project"
    },
    {
      icon: <FaHandshake />,
      title: "Integrity",
      description: "Building lasting relationships through trust and transparency"
    },
    {
      icon: <FaCog />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology and modern techniques"
    },
    {
      icon: <FaCheckCircle />,
      title: "Reliability",
      description: "Consistent delivery on time and within budget"
    }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About NEO STEEL LTD</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>15 Years of Steel Industry Excellence</h3>
            <p>
              NEO STEEL LTD has been at the forefront of the steel fabrication industry for over 15 years, 
              delivering exceptional solutions to our clients. Our commitment to quality, precision, and 
              innovation has made us a trusted partner for projects of all scales.
            </p>
            <p>
              From blueprint to brilliance, we transform your vision into reality. Our team of skilled 
              professionals combines decades of experience with state-of-the-art technology to ensure 
              every project meets the highest standards of excellence.
            </p>
            <p>
              Whether it's commercial construction, industrial fabrication, or custom steel solutions, 
              NEO STEEL LTD has the expertise and resources to exceed your expectations.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
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
