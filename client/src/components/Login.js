import { FaRegUserCircle } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import NavItem from "./NavItem";
import Navbar from "./Navbar";
import React, { UseEffect, useState } from "react";
import axios from "axios";
import { useNavigate, link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const LoginUser = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <form onSubmit={LoginUser}>
          <div className="heading">
            <h1>Login</h1>
            <button>
              <ImExit className="icon" />
            </button>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              requrired
              value={data.username}
              onChange={(e) => setData({ ...data, username: e.target.value })}
            />
            <FaRegUserCircle className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              requrired
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            <TbPasswordUser className="icon" />
          </div>
          <div className="forget">
            <a href="#">forgot Username?</a>
            <a href="#">forgot password?</a>
          </div>
          <div className="loginButton">
            <button type="submit">login</button>
          </div>
          <div className="newMember">
            <NavItem to="/register" text="new member Register Here" />
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
