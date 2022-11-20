import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './NavBar';
import Home from './HomePage';
import DashBoard from './DashBoard';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
      <div className='App w-full h-full flex flex-col m-0 p-0 overflow-x-hidden'>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path='/' element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/Dashboard' element={<DashBoard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/Login' element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/Register' element={<RegisterPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="*" element={<div>404 ERROR</div>} />
        </Routes>
      </div>
  );
}

export default App;
