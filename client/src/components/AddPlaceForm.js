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
    <Flex flexDir="column" color="white">
      <Heading>Add a Place</Heading>
      <FormControl isRequired width="500px">
        <Input placeholder="Name" />
        <Input placeholder="" />
      </FormControl>
    </Flex>
  );
}}

export default AddPlaceForm;
