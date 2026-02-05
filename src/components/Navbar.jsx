import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div></div>
      <div className="text-accent flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Carrer</NavLink>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img src={user}></img>
        <button className="btn btn-primary text-white">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
