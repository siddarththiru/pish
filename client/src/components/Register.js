import "./Register.css";
import Navbar from "./Navbar";
import React,{useEffect,useState} from "react";
import axios from "axios";
import {useNavigate,link} from "react-router-dom";
import NavItem from "./NavItem";
import {toast} from "react-hot-toast";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';

const Register=()=>{
  const navigate=useNavigate()
  const [data,setData]=useState({
    fname:'',
    lname:'',
    email:'',
    username:'',
    password:''
  })
  const registerUser= async (e)=>{
    e.preventDefault()
    const{fname,lname,email,username,password}=data
    try{
      const {data}=await axios.post('/register',{
        fname,lname,email,username,password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        toast.success('Registeration Successful')
        navigate('/')
      }
    }catch(error){
      console.log(error)
    }
  }
  const [Pass,setPass]=useState('password');
  const showPass=()=> setPass('text');
  const hidePass=()=> setPass('Password');
  return (
    <>
    <Navbar/> 
    <div className="wrapper">
      <form onSubmit={registerUser}>
        <h1>Register here</h1>
        <div className="userInputName">
          <input type="text" placeholder="first name" value={data.fname} onChange={(e)=>setData({...data,fname: e.target.value})}/>
          <input type="text" placeholder="last name" value={data.lname} onChange={(e)=>setData({...data,lname: e.target.value})}/>
          <br />
        </div>
        <div className="userInput">
          <input type="text" placeholder="email" value={data.email} onChange={(e)=>setData({...data,email: e.target.value})}/>
          <br />
        </div>
        <div className="userInput">
          <input type="text" placeholder="username" value={data.username} onChange={(e)=>setData({...data,username: e.target.value})}/>
          <br />
        </div>
        <div className="userInput">
          <input type={Pass} placeholder="password" value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}/>
          <br />
        </div>
        <div className="Member" style={{display:'flex',justifyContent:'center'}}>
              <NavItem to="/login"  text="already a member" />
        </div>
        <Flex>
          <Button onClick={showPass}>Show Password</Button>
          <Spacer/>
          <Button onClick={hidePass}>hide Password</Button>
        </Flex>

        <div className="loginButton">
          <button type="submit">SignUp</button>
        </div>
        
      </form>
    </div>
    </>
  );
}

export default Register;
