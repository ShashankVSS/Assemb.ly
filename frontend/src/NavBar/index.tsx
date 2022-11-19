import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="w-full flex flex-initial p-4">
      <div className="font-bold px-4 py-1 text-lg">Hello world</div>
      <div className="flex-1" />
      <div className="flex">
        <div className="px-4 py-1 text-lg">
          <Link to="/">About</Link>
        </div>
        <div className="px-4 py-1 text-lg">
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        <div className="px-6 py-1 text-lg bg-lavender rounded-full border border-purple">
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
