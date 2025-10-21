import React from "react";
import { NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div className=""></div>
      <div className="nav flex gap-6 ">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-4 items-center">
        <img src={userIcon} alt="" />
        <button className="btn btn-primary px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
