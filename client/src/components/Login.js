import { FaRegUserCircle} from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { ImExit } from "react-icons/im";
import NavItem from "./NavItem";
import Navbar from "./Navbar";
import "./Login.css";
const Login = () => {
    return(
        <>
        <Navbar/>
        <div className='wrapper'>
          <form>
            <div className="heading">
                <h1>Login</h1>
                <button><ImExit className="icon"/></button>
            </div>
            <div className="input-box">
              <input type='text' placeholder='Username' requrired />
              <FaRegUserCircle className="icon"/>
            </div>
            <div className="input-box">
              <input type='password' placeholder='password' requrired />
              <TbPasswordUser className="icon"/>
            </div>
            <div className="forget">
              <a href="#">forgot Username?</a>
              <a href="#">forgot password?</a>
            </div>
            <div className="loginButton">
              <button type="submit">login</button>
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