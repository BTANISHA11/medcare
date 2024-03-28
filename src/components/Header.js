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
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/services"}>Services</Link>
        <Link to={"/resources"}>Resources</Link>
        <Link to={"/volunteer"}>Volunteer Registration</Link>
        <Link to={"/call"}>Contact Us</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </main>
    </nav>
  );
};

export default Header;
