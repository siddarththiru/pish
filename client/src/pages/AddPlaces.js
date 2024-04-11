import React from "react";
import Navbar from "../components/Navbar";
import AddPlaceForm from "../components/AddPlaceForm";
import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import NavItem from "./NavItem";
import {toast} from "react-hot-toast";
import { Button} from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';


function AddPlaces() {
  const navigate=useNavigate()
  const [data,setData]=useState({
    name:'',
    location:'',
    description:''
  })
  const registerUser= async (e)=>{
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
    <>
      <Navbar />

      <AddPlaceForm />
    </>
  );
}
}
export default AddPlaces;
