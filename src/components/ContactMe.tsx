import React from 'react';
import ContactForm from './ContactForm';
import { FaLocationArrow, FaPhone, FaClock } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          <FaLocationArrow className="icon" />
          <span><strong>Address:</strong> 236 5th SE Avenue, New York NY10000, United States</span>
        </p>
        <p>
          <FaPhone className="icon" />
          <strong>Phone:</strong>
          <br />
          Mobile: +(84) 546-6789
          <br />
          Hotline: +(84) 456-6789
        </p>
        <p>
          <FaClock className="icon" />
          <strong>Working Hours:</strong>
          <br />
          Monday-Friday: 9:00 - 22:00
          <br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>
      <div className="contact-form-container">
        <h2>Get in Touch</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMe;