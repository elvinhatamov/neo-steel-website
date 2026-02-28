import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FaqPage.css';

const faqItems = [
  {
    question: 'What types of projects does NEO STEEL LTD specialize in?',
    answer:
      'We provide structural steel solutions for commercial, institutional, and industrial construction. Our experience includes schools, office buildings, warehouses, public facilities, and specialized industrial structures.'
  },
  {
    question: 'Are you CWB certified?',
    answer:
      'Yes. Our welding operations comply with Canadian Welding Bureau (CWB) certification requirements under applicable CSA standards. This ensures qualified personnel, approved welding procedures, and controlled quality management systems.'
  },
  {
    question: 'Do you provide both fabrication and erection services?',
    answer:
      'Yes. We deliver complete structural steel services, including detailing coordination, shop fabrication, and on-site erection. Managing both scopes allows us to maintain full accountability, quality control, and schedule integrity.'
  },
  {
    question: 'Do you offer AESS (Architecturally Exposed Structural Steel)?',
    answer:
      'Yes. We fabricate and install AESS in accordance with project-specified classifications and appearance standards. Our team understands the elevated requirements for weld finishing, alignment, and surface preparation when steel is intended to remain exposed.'
  },
  {
    question: 'Can you provide supply-only or erection-only services?',
    answer:
      'Yes. Depending on project needs, we can provide supply-only, erection-only, or full supply-and-install structural steel packages.'
  },
  {
    question: 'Do you assist with design coordination and value engineering?',
    answer:
      'Yes. During pre-construction, we collaborate with general contractors, engineers, and consultants to review constructability, optimize connections, and develop practical, cost-effective solutions while maintaining structural performance.'
  },
  {
    question: 'How do you ensure quality control?',
    answer:
      'Our operations follow structured quality control procedures aligned with CSA and project-specific standards. We maintain documented welding procedures, certified personnel, inspection protocols, and disciplined production planning to ensure compliance and consistency.'
  },
  {
    question: 'Are you insured and bondable?',
    answer:
      'Yes. NEO STEEL LTD maintains appropriate liability insurance and bonding capacity to support commercial, institutional, and industrial projects.'
  },
  {
    question: 'What size projects do you typically handle?',
    answer:
      'We support a wide range of structural steel packages, from smaller commercial developments to larger institutional and industrial builds. Project scope and complexity are evaluated individually to ensure proper execution and scheduling.'
  },
  {
    question: 'How quickly can you provide pricing?',
    answer:
      'We provide detailed, transparent estimates based on drawings and specifications. Turnaround time varies depending on scope and complexity, but we prioritize timely responses to support pre-construction planning.'
  }
];

const FaqPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <section className="section faq-page">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <article key={item.question} className={`faq-item ${openFaqIndex === index ? 'faq-item-open' : ''}`}>
              <button
                className="faq-question"
                type="button"
                onClick={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                aria-expanded={openFaqIndex === index}
              >
                <h3>{item.question}</h3>
                {openFaqIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {openFaqIndex === index && <p className="faq-answer">{item.answer}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
