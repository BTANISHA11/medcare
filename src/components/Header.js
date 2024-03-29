import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <nav>
      <img src={logo} alt="logo" width={200} height={100} />
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <HashLink to={"/#about"}>About Us</HashLink>
        <Link to={"/services"}>Services</Link>
        <Link to={"/resources"}>Resources</Link>
        <Link to={"/volunteer"}>Volunteer Registration</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/call"}>Call Support</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Sign Up</Link>
      </main>
    </nav>
  );
};

export default Header;
