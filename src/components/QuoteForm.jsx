import { useState } from 'react';
import './QuoteForm.css';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    description: '',
    timeline: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid - in a real application, you would send this to a server
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          description: '',
          timeline: ''
        });
        setIsSubmitted(false);
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="quote" className="section quote-form-section">
      <div className="container">
        <h2 className="section-title">Get a Quote</h2>
        <p className="quote-intro">
          Ready to start your project? Fill out the form below and our team will get back to you 
          within 24 hours with a detailed quote.
        </p>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your quote request has been submitted. We'll contact you shortly.</p>
          </div>
        ) : (
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Project Type *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={errors.projectType ? 'error' : ''}
                >
                  <option value="">Select a service...</option>
                  <option value="steel-fabrication">Steel Fabrication</option>
                  <option value="structural-steel">Structural Steel</option>
                  <option value="metal-working">Metal Working</option>
                  <option value="installation">On-Site Installation</option>
                  <option value="custom-design">Custom Design</option>
                  <option value="industrial">Industrial Solutions</option>
                </select>
                {errors.projectType && <span className="error-message">{errors.projectType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Project Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={errors.timeline ? 'error' : ''}
                >
                  <option value="">Select timeline...</option>
                  <option value="urgent">Urgent (Within 1 month)</option>
                  <option value="short">1-3 months</option>
                  <option value="medium">3-6 months</option>
                  <option value="long">6+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
                {errors.timeline && <span className="error-message">{errors.timeline}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="description">Project Description *</label>
              <textarea
                id="description"
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                className={errors.description ? 'error' : ''}
                placeholder="Please provide details about your project requirements..."
              ></textarea>
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Submit Quote Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
