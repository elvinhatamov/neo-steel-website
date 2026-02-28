import './Services.css';
import { Link } from 'react-router-dom';
import steelEngineerImage from '../assets/services/steel_engineer.png';
import structSteelImage from '../assets/services/struct_steel.png';
import projectManagementImage from '../assets/services/project_manag.png';
import miscellaneousMetalsImage from '../assets/services/miscel_metal.png';
import estimateImage from '../assets/services/estimate.png';
import customImage from '../assets/services/custom.png';
import aessImage from '../assets/services/aess.png';

const Services = () => {
  const serviceSections = [
    {
      title: 'Detailing & Engineering',
      description:
        'Our integrated detailing and engineering team ensures fully coordinated, constructable designs from concept through fabrication. Using advanced 3D modeling and drafting systems, we eliminate conflicts early, protect schedules, and deliver accurate, build-ready steel packages.',
      services: [],
      image: steelEngineerImage,
      imageAlt: 'Structural steel framework under construction'
    },
    {
      title: 'Structural Steel Fabrication & Erection',
      description:
        'We provide complete structural steel solutions — from precision shop fabrication to disciplined on-site erection. By managing both operations internally, we ensure seamless execution, strict quality control, and dependable project delivery across commercial, institutional, and industrial sectors.',
      services: [],
      image: structSteelImage,
      imageAlt: 'Custom steel stair and railing system'
    },
    {
      title: 'Project Management',
      description:
        'Structured planning, proactive coordination, and clear communication drive every project. From procurement to installation, we manage timelines, logistics, and trade integration to maintain schedule integrity and minimize risk.',
      services: [],
      image: projectManagementImage,
      imageAlt: 'Project management and planning for structural steel execution'
    },
    {
      title: 'Miscellaneous Metals',
      description:
        'We fabricate and install stairs, guardrails, ladders, bollards, equipment supports, and custom architectural metals. Delivered under one coordinated scope, our miscellaneous metals services simplify procurement and ensure consistent quality across the build.',
      services: [],
      image: miscellaneousMetalsImage,
      imageAlt: 'Fabricated miscellaneous steel and architectural metal components'
    },
    {
      title: 'Estimating',
      description:
        'Our detailed take-offs and transparent pricing provide clarity during pre-construction. With practical value-engineering options and constructability insight, we help clients make informed decisions while protecting budgets.',
      services: [],
      image: estimateImage,
      imageAlt: 'Construction estimating and pre-construction planning'
    },
    {
      title: 'Custom Fabrication',
      description:
        'For projects requiring specialized solutions, we deliver precision-built custom steel components tailored to exact specifications, finishes, and site conditions.',
      services: [],
      image: customImage,
      imageAlt: 'Custom fabricated steel components for specialized projects'
    },
    {
      title: 'AESS (Architecturally Exposed Structural Steel)',
      description:
        'NEO STEEL LTD provides Architecturally Exposed Structural Steel (AESS) for projects where structural steel is intended to remain visible and form part of the architectural design.',
      services: [
        'AESS requires elevated standards of fabrication, weld finishing, alignment, and surface preparation beyond conventional structural steel. Our team works closely with architects, consultants, and general contractors to clearly define appearance expectations and deliver exposed steel that meets both structural and visual requirements.',
        'From connection detailing through final coating, we apply disciplined quality control to ensure clean welds, refined transitions, and precise installation.',
        'Typical Applications:',
        'Schools and institutional facilities',
        'Commercial lobbies and office developments',
        'Civic and public buildings',
        'Feature stair systems',
        'Canopies and atriums',
        'High-visibility structural elements',
        'NEO STEEL LTD delivers AESS solutions that combine structural integrity with architectural precision.'
      ],
      image: aessImage,
      imageAlt: 'Architecturally exposed structural steel installation'
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
          to meet the unique needs of each project.
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

                {section.services.length > 0 && (
                  <>
                    <p className="service-list-title">Services include:</p>
                    <ul className="service-items">
                      {section.services.map((service) => (
                        <li key={service}>{service}</li>
                      ))}
                    </ul>
                  </>
                )}

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
