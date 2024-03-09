import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  return (
    <div><Register/></div>
  );
}

const Register=()=>{
  return(
    <div className='wrapper'>
        <form>
            <h1>Register here</h1>
            <div className='userInputName'>
              <input type='text' placeholder='first name'/>
              <input type='text' placeholder='last name'/><br/>
            </div>
            <div className='userInput'>
              <input type='text' placeholder='email'/><br/>
            </div>
            <div className='userInput'>
              <input type='text' placeholder='username'/><br/>
            </div>
            <div className='userInput'>
              <input type='text' placeholder='password'/><br/>
            </div>
            <div className='userInput'>
              <input type='text' placeholder='confirm password'/><br/>
            </div>
            <div className='memberType'>
              <h3>why do you want to use this website</h3>
              <div className='option'>
                <input type="radio" id="type1" name="type" value="Member"/>
                <label for="type1"> I want see and give my reviews</label>
                <input type="radio" id="type2" name="type" value="Car"/>
                <label for="type">I want to advertise my business</label>
              </div>
              <div className="loginButton">
              <button type="submit">login</button>
            </div>
            </div>
        </form>
      </div>
  )
}


export default App;
