import React, { lazy, Suspense, useRef, useState } from "react";
import { ToastContainer } from 'react-toastify';
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Loader from "./Components/Loader/Loader";
import Privacy_Polices from "./Pages/Privacy_Polices/Privacy_Polices";
import Term_Conditions from "./Pages/Term_Conditions/Term_Conditions";
import Login from "./Pages/Login/Login";
import Students_Freshers from "./Pages/Students_Freshers/Students_Freshers";
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Career = lazy(() => import("./Pages/Career/Career"));
const Apply = lazy(() => import("./Pages/Apply/Apply"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Pricing = lazy(() => import("./Pages/Pricing/Pricing"));
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));

const App = () => {

  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/students/freshers" element={<Students_Freshers />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacy_policies" element={<Privacy_Polices />} />
          <Route path="/term_conditions" element={<Term_Conditions />} />
        </Routes>
        <Footer />
        <ToastContainer />

      </BrowserRouter>
    </Suspense>

  );
};

export default App;
