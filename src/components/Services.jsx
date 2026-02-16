import { FaIndustry, FaTools, FaBuilding, FaHardHat, FaCubes, FaWarehouse } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaIndustry />,
      title: "Steel Fabrication",
      description: "Custom steel fabrication services for industrial and commercial projects with precision and quality."
    },
    {
      icon: <FaBuilding />,
      title: "Structural Steel",
      description: "Structural steel solutions for buildings, bridges, and infrastructure projects of any scale."
    },
    {
      icon: <FaTools />,
      title: "Metal Working",
      description: "Expert metal working services including cutting, welding, and finishing to exact specifications."
    },
    {
      icon: <FaHardHat />,
      title: "On-Site Installation",
      description: "Professional installation services with experienced teams ensuring safety and quality standards."
    },
    {
      icon: <FaCubes />,
      title: "Custom Design",
      description: "Collaborative design services to bring your unique vision to life with engineering excellence."
    },
    {
      icon: <FaWarehouse />,
      title: "Industrial Solutions",
      description: "Comprehensive industrial steel solutions including platforms, stairs, and specialized structures."
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="services-intro">
          NEO STEEL LTD offers a comprehensive range of steel fabrication and construction services 
          tailored to meet the unique needs of each project.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-link">Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
