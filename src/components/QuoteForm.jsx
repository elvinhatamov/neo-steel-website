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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setSubmitError('');
      setIsSubmitting(true);

      try {
        const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);

        if (isLocalhost) {
          setIsSubmitted(true);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            description: '',
            timeline: ''
          });

          setTimeout(() => {
            setIsSubmitted(false);
          }, 3000);

          setIsSubmitting(false);
          return;
        }

        const payload = new URLSearchParams({
          'form-name': 'quote-request',
          ...formData
        }).toString();

        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: payload
        });

        if (!response.ok) {
          throw new Error('Failed to submit form');
        }

        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          description: '',
          timeline: ''
        });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (error) {
        setSubmitError('Submission failed. Please try again or email elvin.hatamov@outlook.com directly.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="quote" className="section quote-form-section">
      <div className="container">
        <h2 className="section-title">Get a Quote</h2>

        {['localhost', '127.0.0.1'].includes(window.location.hostname) && (
          <p className="quote-intro">
            Local test mode: submissions are simulated on localhost. Deploy to Netlify to send real emails.
          </p>
        )}

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your quote request has been submitted. We'll contact you shortly.</p>
          </div>
        ) : (
          <form
            className="quote-form"
            name="quote-request"
            method="POST"
            action="/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="quote-request" />
            <input type="hidden" name="bot-field" />
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
                  <option value="structural-steel">Structural Steel</option>
                  <option value="aess">AESS (Architecturally Exposed Structural Steel)</option>
                  <option value="miscellaneous-metals">Miscellaneous Metals</option>
                  <option value="industrial-steel-structures">Industrial Steel Structures</option>
                  <option value="design-assist-engineering-support">Design-Assist / Engineering Support</option>
                  <option value="budget-preliminary-pricing">Budget / Preliminary Pricing</option>
                  <option value="other">Other</option>
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

            {submitError && <span className="error-message">{submitError}</span>}

            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default QuoteForm;
