import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer } from 'react-toastify';

import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";

const App = () => {




  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
         <Route  path="/" element={<Home/>}/>
      </Routes>
      <Footer />
      <ToastContainer />

    </BrowserRouter>

  );
};

export default App;
