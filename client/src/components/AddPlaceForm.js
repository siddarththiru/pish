import React from "react";
import { Flex, Heading, FormControl, FormLabel, Input } from "@chakra-ui/react";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";

function AddPlaceForm() {
  const navigate=useNavigate()
  const [data,setData]=useState({
    name:'',
    location:'',
    description:''
  })
  const AddPlace= async (e)=>{
    e.preventDefault()
    const{name,location,description}=data
    try{
      const {data}=await axios.post('/add-places',{
        name,location,description
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        toast.success('Places added')
        navigate('/')
      }
    }catch(error){
      console.log(error)
    }
  return (
    <div id="add-places">
      <h1>Welcome to the Review Page!</h1>
      <h2>Share your experiences and help others discover hidden gems by leaving reviews and adding the places to the website!
        Your insights can make a world of difference for fellow adventurers seeking the best places to explore.</h2>
      <form onSubmit={handleSubmit}>
        <div id='places'>
          <label htmlFor="placeName">Name of Place:</label>
          <input type="text" id="placeName" value={Name} onChange={(e) => setData(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" value={location} onChange={(e) => setData(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="reviewText">Your Review:</label>
          <textarea id="reviewText" value={description} onChange={(e) => setData(e.target.value)} required></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
      {/* Display thank you message if review is submitted */}
      {submitted && <h5>Thank you for submitting the review!</h5>}
    </div>
  );

}}

export default AddPlaceForm;
