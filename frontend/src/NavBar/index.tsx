import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/wrench.png";

interface INavBar {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}
const NavBar: React.FC<INavBar> = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className="w-full bg-white flex flex-initial p-4 sticky top-0">
      <div className="font-bold px-4 py-1 text-lg"><Link to="/">Assemb.ly</Link></div>
      <div className="flex-1" />
      <div className="flex">
        <div className="px-4 py-1 flex text-lg">
          <Link to="/">About</Link>
        </div>
        <div className="px-4 py-1 text-lg">
          {isLoggedIn ? <Link to="/Dashboard">Dashboard</Link> :  <Link to="/Login">Dashboard</Link>}
        </div>
        <div className="px-6 py-1 text-lg bg-lavender rounded-full border border-purple">
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
