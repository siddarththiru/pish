import React, { useState } from 'react';
import "./footer.css";

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the email to your backend for processing or use any API service for newsletter subscription
    console.log('Email submitted:', email);
    setSubscribed(true);
  };

  return (
    <div id='subscribe'>
      {!subscribed ? (
        <form onSubmit={handleSubmit}>
            <h3>Subscribe</h3>
          <h4>Subscribe to our Newsletter for more exciting information about hidden gems in Dublin</h4>
          <label htmlFor="email">Email Adress: </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      ) : (
        <div>
          <p>Thank you for subscribing !</p>
          <p>Your email address has been added to our newsletter list.You will receive weekly updates, keep an eye out.</p>
        </div>
        
      )}
    </div>
  );
};

export default Subscribe;