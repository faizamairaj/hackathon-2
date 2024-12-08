"use client";
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send email or store data
    console.log(formData);

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="name">
        Your Name:
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="email">
        Email address:
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor="subject">
        Subject (Optional):
        <input
          type="text"
          name="subject"
          placeholder="Subject (Optional)"
          value={formData.subject}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message">
        Message:
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;