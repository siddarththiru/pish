import React from 'react';
import "./Newsletter.css";



const Newsletter = () => {
  return (
    <div id="newsletter-content">
       
      <h1>PISH Newsletter</h1>
      <h2>Hello and welcome to the newsletter of PISH.This Week in Dublin:</h2>
      <h3>Places to Visit</h3>
      <ul>
        <li>Explore Dublin's iconic landmarks such as Book of Kells at Trinity College, and the Guinness Storehouse.
        </li>
      
        <li>Take a relaxing walk at St.Stephen's Green park and explore the statues around the park.
        </li>
        <li>Visit the Grand Canal Dock and definetely get a spice bag !
        </li>
        <li>.Visit the candle light concert held at O'Reilly Theatre. The scenic view and beautiful music make for the perfect combination !
        </li>
        <li>.Drink and draw is a great experience where you can paint on a canvas and enjoy your favourite drinks.
        </li>
      </ul>

      <h3>Discounts</h3>
      <ul>
        <li>Enjoy 20% off admission to Dublin Zoo with your student ID.</li>
        <li>Get a free coffee with any pastry purchase at Joe's Café on Grafton Street.</li>
        <li>Get a student meal deal for 13.95 euros at Wow burger.</li>
        <li>The ruby sessions, offers 20% off for early registerations.</li>
        <li>Get a box of glazed donuts for free when you buy one dozen at Krsipy Kreme.</li>
      </ul>

      <h3>Events</h3>
      <ol>
      <li>
        Don't miss the Dublin International Film Festival happening this weekend at various theaters across the city.
      </li>
      <li>
        Another Late Night Event happening at Vela restaurant. Tickets start from & euros.
      </li>
      <li>
        Stand-up Comedy cu Sorin happening at O'Reilly Theatre. Tickets start from 26 euros. 
      </li>
      </ol>

      <h3>Featured Restaurant</h3>
      <div id="featured-restaurant">
        <ol>
          <li>Indulge in delicious sandwhiches, pancakes, crepes at <span className="bold-text">Lemon Crêpe & Coffee Co.</span> </li>
           <li>Indulge in authentic Irish cuisine at <span className="bold-text">The Brazen Head</span> , Dublin's oldest pub, and enjoy live music every night.</li>
        
        </ol>
      </div>
    </div>
  );
};

export default Newsletter;

