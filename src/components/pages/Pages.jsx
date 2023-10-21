import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../common/Navbar";
import { Home } from "../home/Home";
import { About } from "./About";
import { Services } from "./Services";
import { Contact } from "./Contact";



export const Pages = () => {
  return (
    <>
        <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </>
  )
}
