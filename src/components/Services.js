import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="services-info">
        <div className="service-card">
          <h3>Web Design</h3>
          <p>Stunning and adaptable websites personalized to match your brand.</p>
        </div>
        <div className="service-card">
          <h3>Graphic Design</h3>
          <p>Innovative creations for logos, brand identity, and promotional materials.</p>
        </div>
        <div className="service-card">
          <h3>Digital Marketing</h3>
          <p>Strategies that power your brand's growth and boost engagement.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
