import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <img src={logo}></img>
      <p className="">Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
