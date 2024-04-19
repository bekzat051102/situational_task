import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-list">
        <div className="portfolio-item">
        <h3>Website Revamp</h3>
  <p>Discover our recent overhaul of XYZ company's website.</p>
  </div>
  <div className="portfolio-item">
  <h3>Brand Identity</h3>
  <p>Explore our innovative logo design work for ABC company.</p>
  </div>
  <div className="portfolio-item">
  <h3>Digital Campaign</h3>
  <p>Witness the triumph of our digital marketing campaign for DEF company.</p>
  </div>
  <div className="portfolio-item">
  <h3>Social Media Strategy</h3>
  <p>Observe the growth in engagement and followers achieved through our social media management for GHI company.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
