import React from "react";
import { Link } from "react-router-dom";


function Header() {
    return (
      <div className="nav">
        <div className="nav-logo">REACT</div>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/signup"}>SignUp</Link>
      </div>
    );
  }
  export default Header;