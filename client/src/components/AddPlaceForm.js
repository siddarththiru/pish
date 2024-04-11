import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./AddPlaces.css"; 
import Navbar from "./Navbar";

function AddPlaceForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    location: "",
    description: ""
  });
  const [reviewSubmitted, setReviewSubmitted] = useState(false); // State variable to track review submission

  const AddPlace = async (e) => {
    e.preventDefault();
    const { name, location, description } = data;
    try {
      const response = await axios.post("/add-places", {
        name,
        location,
        description
      });
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Place added successfully!");
        setReviewSubmitted(true); // Update state to indicate review submission
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
        <button type="submit">Submit Review</button>
      </form>
      {reviewSubmitted && <h5>Thank you for submitting the review!</h5>} {/* Conditionally render based on review submission */}
    </div>
    </>
  );
}

export default AddPlaceForm;
