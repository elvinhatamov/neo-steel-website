import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["info@neosteel.com", "quotes@neosteel.com"]
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: ["123 Industrial Drive", "Steel City, ST 12345"]
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

          <div className="contact-map-placeholder">
            <div className="map-content">
              <FaMapMarkerAlt className="map-icon" />
              <h4>Find Us</h4>
              <p>Map Integration Placeholder</p>
              <p className="map-note">
                We're conveniently located in the heart of the industrial district, 
                easily accessible from major highways.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
