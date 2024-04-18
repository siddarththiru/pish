import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './AddPlaces.css';
import Navbar from '../components/Navbar';

function AddPlaceForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    location: "",
    description: "",
    rating: "", 
  });
  const handleReset = () => {
    setData({
      name: " ",
      location: "",
      description: "",
      rating: ""
    });
  };


  const AddPlace = async (e) => {
    e.preventDefault();
    const { name, location, description, rating } = data;
    try {
      const response = await axios.post("http://localhost:3001/add-places", {
        name,
        location,
        description,
        rating
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Place added successfully!");
        navigate("http://localhost:3000");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const ratingValue = name === "rating" ? Math.max(1, Math.min(5, parseInt(value))) : value;
  setData({ ...data, [name]: ratingValue });
  };

  return (
    <>
    <Navbar/>
    <div id="add-place">
      <h1>Welcome to the Review Page!</h1>
      <h2>
        Share your experiences and help others discover hidden gems by leaving
        reviews and adding the places to the website! Your insights can make a
        world of difference for fellow adventurers seeking the best places to
        explore.
      </h2>
      <form onSubmit={AddPlace}>
        <div id="places">
          <label htmlFor="placeName">Name of Place:</label>
          <input
            type="text"
            id="placeName"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={data.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="reviewText">Your Review:</label>
          <textarea
            id="reviewText"
            name="description"
            value={data.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor = "Rating:">Rating:</label><br></br>
          <label>Please add a rating between 1 and 5</label>
        <input
          type="number"
          id="rating" 
          name="rating" 
          value={data.rating} 
          onChange={handleChange} 
          min="1" 
          max="5" 
          step="1"
          required 
        />

        </div>
        <button type="submit">Submit Review</button>
        <br></br>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
      <h5>Thank you for submitting the review!</h5>
      
    </div>
    </>
  );
}

export default AddPlaceForm;
