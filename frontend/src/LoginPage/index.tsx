import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

interface ILoginPage {
  isLoggedIn: boolean;
  setIsLoggedIn: any;
}

const LoginPage: React.FC<ILoginPage> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="text-center my-[20vh] content-center">
      <div className="my-6 font-bold text-xl">Login</div>
      <div className="mt-2 mb-1">Username</div>
      <TextField
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        className="w-1/4"
      />
      <div className="mt-2 mb-1">Password</div>
      <TextField
        type={"password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-1/4 my-6"
      />
      <div className="display-inline">
        <div>Dont have an account?</div>
        <Link to="/Register">Sign up</Link>
      </div>
      <div className="">
        <button className="my-6 px-6 py-2 border rounded-lg bg-lavender">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
