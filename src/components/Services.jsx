import { FaIndustry, FaTools, FaBuilding, FaHardHat, FaCubes, FaWarehouse } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const serviceScope = [
    {
      title: "Detailing & Engineering",
      description:
        "Our integrated detailing and engineering team ensures fully coordinated, constructable designs from concept through fabrication. Using advanced 3D modeling and drafting systems, we eliminate conflicts early, protect schedules, and deliver accurate, build-ready steel packages."
    },
    {
      title: "Structural Steel Fabrication & Erection",
      description:
        "We provide complete structural steel solutions—from precision shop fabrication to disciplined on-site erection. By managing both operations internally, we ensure seamless execution, strict quality control, and dependable project delivery across commercial, institutional, and industrial sectors."
    },
    {
      title: "Project Management",
      description:
        "Structured planning, proactive coordination, and clear communication drive every project. From procurement to installation, we manage timelines, logistics, and trade integration to maintain schedule integrity and minimize risk."
    },
    {
      title: "Miscellaneous Metals",
      description:
        "We fabricate and install stairs, guardrails, ladders, bollards, equipment supports, and custom architectural metals. Delivered under one coordinated scope, our miscellaneous metals services simplify procurement and ensure consistent quality across the build."
    },
    {
      title: "Estimating",
      description:
        "Our detailed take-offs and transparent pricing provide clarity during pre-construction. With practical value-engineering options and disciplined budgeting, we help clients make informed decisions while protecting project outcomes."
    },
    {
      title: "Custom Fabrication",
      description:
        "For projects requiring specialized solutions, we deliver precision-built custom steel components tailored to exact specifications, finishes, and site conditions."
    },
    {
      title: "AESS (Architecturally Exposed Structural Steel)",
      description:
        "NEO STEEL LTD provides Architecturally Exposed Structural Steel (AESS) for projects where structural steel is intended to remain visible and form part of the architectural design."
    }
  ];

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
        <p className="services-tagline">
          Precision in Fabrication. Discipline in Execution. Strength in Every Structure.
        </p>
        <p className="services-intro">
          NEO STEEL LTD offers a comprehensive range of steel fabrication and construction services 
          tailored to meet the unique needs of each project.
        </p>

        <div className="services-scope">
          {serviceScope.map((item, index) => (
            <div key={index} className="scope-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button className="service-link" aria-label={`Learn more about ${service.title}`}>Learn More →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
