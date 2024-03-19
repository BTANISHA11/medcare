import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import SignOut from "../SignOut";

const Header = () => {
  return (
    <nav>
      <h1>Medcare</h1>
      <main>
        <HashLink to={"/#home"}>Home</HashLink>
        <Link to={"/contact"}>Contact</Link>
        <HashLink to={"/#about"}>About</HashLink>
        <Link to={"/services"}>Services</Link>
        <SignOut/>
      </main>
    </nav>
  );
};

export default Header;