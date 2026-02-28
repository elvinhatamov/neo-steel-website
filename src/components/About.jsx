import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './About.css';
import cwbGroupLogo from '../assets/certifications/cwb-group.svg';
import ossfaLogo from '../assets/certifications/ossfa.svg';

const About = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

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

  const faqs = [
    {
      question: "1. What types of projects does NEO STEEL LTD specialize in?",
      answer:
        "We provide structural steel solutions for commercial, institutional, and industrial construction. Our experience includes schools, office buildings, warehouses, public facilities, and specialized industrial structures."
    },
    {
      question: "2. Are you CWB certified?",
      answer:
        "Yes. Our welding operations comply with Canadian Welding Bureau (CWB) certification requirements under applicable CSA standards. This ensures qualified personnel, approved welding procedures, and controlled quality management systems."
    },
    {
      question: "3. Do you provide both fabrication and erection services?",
      answer:
        "Yes. We deliver complete structural steel services, including detailing coordination, shop fabrication, and on-site erection. Managing both scopes allows us to maintain full accountability, quality control, and schedule integrity."
    },
    {
      question: "4. Do you offer AESS (Architecturally Exposed Structural Steel)?",
      answer:
        "Yes. We fabricate and install AESS in accordance with project-specified classifications and appearance standards. Our team understands the elevated requirements for weld finishing, alignment, and surface preparation when steel is intended to remain exposed."
    },
    {
      question: "5. Can you provide supply-only or erection-only services?",
      answer:
        "Yes. Depending on project needs, we can provide supply-only, erection-only, or full supply-and-install structural steel packages."
    },
    {
      question: "6. Do you assist with design coordination and value engineering?",
      answer:
        "Yes. During pre-construction, we collaborate with general contractors, engineers, and consultants to review constructability, optimize connections, and develop practical, cost-effective solutions while maintaining structural performance."
    },
    {
      question: "7. How do you ensure quality control?",
      answer:
        "Our operations follow structured quality control procedures aligned with CSA and project-specific standards. We maintain documented welding procedures, certified personnel, inspection protocols, and disciplined production planning to ensure compliance and consistency."
    },
    {
      question: "8. Are you insured and bondable?",
      answer:
        "Yes. NEO STEEL LTD maintains appropriate liability insurance and bonding capacity to support commercial, institutional, and industrial projects."
    },
    {
      question: "9. What size projects do you typically handle?",
      answer:
        "We support a wide range of structural steel packages, from smaller commercial developments to larger institutional and industrial builds. Project scope and complexity are evaluated individually to ensure proper execution and scheduling."
    },
    {
      question: "10. How quickly can you provide pricing?",
      answer:
        "We provide detailed, transparent estimates based on drawings and specifications. Turnaround time varies depending on scope and complexity, but we prioritize timely responses to support pre-construction planning."
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

        <div className="about-faq">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaqIndex === index ? 'faq-item-open' : ''}`}>
                <button
                  className="faq-question"
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                  aria-expanded={openFaqIndex === index}
                >
                  <span>{faq.question.replace(/^\d+\.\s*/, '')}</span>
                  {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaqIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
          <p className="faq-cta">
            Have additional questions about your project? Contact our team to discuss scope, scheduling, and structural steel requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
