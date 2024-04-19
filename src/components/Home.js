import React from 'react';
import bannerImage from '../assets/banner.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="PixelPerfect Solutions Banner" />
      <div className="banner-text">
        <h1>Welcome to PixelPerfect Solutions</h1>
        <p>Unlock Your Digital Potential with PixelPerfect Solutions!</p>
      </div>
      <div className="benefits">
        <h2>What You'll Gain from Partnering with Us:</h2>
        <div className="benefits-list">
          <div className="benefit">
            <h3>Expertise in Design and Development</h3>
            <p>We offer extensive experience in web design and development, staying ahead with the latest trends and technologies</p>
          </div>
          <div className="benefit">
            <h3>Customized Approach</h3>
            <p>Each project is approached uniquely, with careful analysis of your needs and goals to deliver tailored solutions that align with your brand and target audience</p>
          </div>
          <div className="benefit">
            <h3>Commitment to Excellence</h3>
            <p>We pride ourselves on high-quality work and ensure client satisfaction by working closely with you to meet and exceed expectations</p>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default Home;
