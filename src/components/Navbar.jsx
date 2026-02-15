import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("logout");
    logOut()
      .then(() => {
        toast.success("You are logged Out!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-between">
      <div>
        {user && <span>Welcome, {user.displayName || user.email}</span>}
      </div>
      <div className="text-accent flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex justify-center items-center gap-2">
        <img
          className="w-9 rounded-full"
          src={`${user ? user.photoURL : userIcon}`}
        ></img>
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary text-white">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
