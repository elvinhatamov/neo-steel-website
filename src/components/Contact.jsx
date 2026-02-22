import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: [
        <a href="tel:+15488816904">+1 (548) 881-6904</a>
      ]
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: [
        <a href="mailto:elnuradam701@gmail.com">info@neosteel.ca</a>
      ]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: ["3640 Weston Road #8", "North York, ON M9L 1W2"]
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Mon - Fri: 7:00 AM - 6:00 PM", "Sat: 8:00 AM - 2:00 PM"]
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="contact-intro">
          Have questions or ready to discuss your project? Get in touch with our team today.
        </p>

        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-info-card">
                <div className="contact-icon">{info.icon}</div>
                <h4>{info.title}</h4>
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="contact-map">
            <iframe
              title="NEO STEEL LTD Location"
              src="https://www.google.com/maps?q=3640+Weston+Road+%238,+North+York,+ON+M9L+1W2&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
