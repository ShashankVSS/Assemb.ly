import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from './NavBar';
import Home from './HomePage';
import DashBoard from './DashBoard';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const App: React.FC = () => {
  return (
      <div className='App w-full h-full flex flex-col m-0 p-0'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Dashboard' element={<DashBoard />} />
          <Route path='/Login' element={<LoginPage isLoggedIn={false}/>} />
          <Route path='/Register' element={<RegisterPage isLoggedIn={false}/>} />
          <Route path="*" element={<div>404 ERROR LMFAO GET FUCKED</div>} />
        </Routes>
      </div>
  );
}

export default App;
