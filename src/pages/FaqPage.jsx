import './FaqPage.css';

const faqItems = [
  {
    question: 'What types of steel fabrication projects do you handle?',
    answer:
      'We handle structural steel frameworks, custom metal works, and specialty fabrication for commercial and residential applications.'
  },
  {
    question: 'Do you provide both fabrication and installation?',
    answer:
      'Yes. Our team supports estimating, consulting, drafting, fabrication, and installation under one roof for coordinated delivery.'
  },
  {
    question: 'Can I request a quote for custom work?',
    answer:
      'Absolutely. You can submit project details through the quote page, and our team will follow up with the next steps.'
  },
  {
    question: 'Do you work on projects of different sizes?',
    answer:
      'Yes. We deliver solutions for projects of varying scales, from complex commercial structures to precision residential work.'
  }
];

const FaqPage = () => {
  return (
    <section className="section faq-page">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqItems.map((item) => (
            <article key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqPage;
