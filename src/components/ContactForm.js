import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import './styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration - user needs to set these up
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      // If EmailJS is not configured, show email addresses instead
      if (serviceId === 'YOUR_SERVICE_ID') {
        setStatus({
          type: 'info',
          message: `EmailJS not configured. Please contact: ${portfolioData.personal.email} or ${portfolioData.personal.personalEmail}`
        });
        setIsSubmitting(false);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: portfolioData.personal.email
        },
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-decoration contact-decoration">
          <FaEnvelope />
        </div>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Feel free to reach out for collaborations, inquiries, or just to say hello!</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href={`mailto:${portfolioData.personal.email}`}>{portfolioData.personal.email}</a>
              </div>
              <div className="contact-item">
                <strong>Personal Email:</strong>
                <a href={`mailto:${portfolioData.personal.personalEmail}`}>{portfolioData.personal.personalEmail}</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message here..."
              />
            </div>
            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;

