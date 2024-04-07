import { FaRegUserCircle} from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import NavItem from "./NavItem";
import Navbar from "./Navbar";
import React,{useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react';
import {toast} from "react-hot-toast";
import "./Login.css";


axios.defaults.baseURl='http://localhost:8000';
axios.defaults.withCredentials=true
const Login  = () =>  {
  const navigate = useNavigate()
  const [data,setData]=useState({
    username:'',
    password:''
  })
  const LoginUser =async (e) => {
    e.preventDefault()
    const{username,password}=data
    
    try{
      const {data}=await axios.post('/login',{
        username,password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        
        setData({});
        navigate('/')
      }
    }catch(err){
      console.log(err)
    }
  }
  const [Pass,setPass]=useState('password');
  const showPass=()=> setPass('text');
  const hidePass=()=> setPass('Password');
    return(
        <>
        <Navbar/>
        <div className='wrapper'>
          <form onSubmit={LoginUser}>
            <div className="heading">
                <h1>Login</h1>
                <button><ImExit className="icon"/></button>
            </div>
            <div className="input-box">
              <input type='text' placeholder='Username' required value={data.username} onChange={(e)=>setData({...data,username: e.target.value})}/>
              <FaRegUserCircle className="icon"/>
            </div>
            <div className="input-box">
              <input type={Pass} placeholder='password' required value={data.password} onChange={(e)=>setData({...data,password: e.target.value})}/>
              <TbPasswordUser className="icon"/>
            </div>
            <Flex>
              <Button onClick={showPass}>Show Password</Button>
              <Spacer />
              <Button onClick={hidePass}>hide Password</Button>

            </Flex>
            <div className="loginButton">
              <button type="submit" >login</button>
            </div>

            <div className="newMember">
              <NavItem to="/register"  text="new member Register Here" />
            </div>
          </form>
        </div>
        </>
  
    )
  
  }
  export default Login;