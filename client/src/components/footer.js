// Footer.js
import React from 'react';
import "./footer.css";
import Subscribe from './pages/Newsletter';

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
        <h2>About Us</h2>
          <p>Pish is your ultimate guide to uncovering the best spots across Dublin, from must-see attractions to hidden gems. 
            We make exploring the city a breeze, ensuring you never miss out on its vibrant culture or scenic views. Plus, we've got you covered with exclusive 
            student discounts, making your adventures both memorable and budget-friendly!</p>
        </div>
        <div className="col">
        <h3>Contact Us</h3>
          <p>Got questions or feedback? Reach out to us at Pish! We're here to assist you every step of the way. </p>
          <p>Email:pish@gmail.com<br/>
           Instagram:Pish_dublin
          </p>
        </div>
        <div className="col">
          <h3>Follow Us</h3>
          <div className="social-icons">
             <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
         
          </div>
          <div className="site-credits">
            <h5>PISH&copy;</h5>
            <p>Site designed and developed by Idil, Harsha, Prathibha, Siddarth</p>
          <p>&copy; 2024 PISH. All rights reserved.</p>
           </div>
        </div>
        <div><Subscribe/></div>
      </div>
    </footer>
  );
};

export default Footer;