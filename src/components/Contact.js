import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div>
          <h3>Address</h3>
          <p>Country: Kyrgyzstan<br></br>City:Bishkek</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>bekzat.zamirbekuulu@alatoo.edu.kg</p>
        </div>
        <div>
          <h3>Phone</h3>
          <p>+996 773 708 492</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
