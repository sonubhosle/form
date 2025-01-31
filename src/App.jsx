import React, { lazy, useRef, useState } from "react";
import { ToastContainer } from 'react-toastify';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Career from "./Pages/Career/Career";
import Apply from "./Pages/Apply/Apply";
import Projects from "./Pages/Projects/Projects";
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));

const App = () => {




  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
      <ToastContainer />

    </BrowserRouter>

  );
};

export default App;
