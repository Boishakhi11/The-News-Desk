import React from "react";
import logo from "../assets/logo.png";
import { format, compareAsc } from "date-fns";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-5">
      <img src={logo}></img>
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="">{format(new Date(), "EEEE, MMMM M, y")}</p>
    </div>
  );
};

export default Header;
