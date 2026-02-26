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

        <div className="about-faq">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
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
