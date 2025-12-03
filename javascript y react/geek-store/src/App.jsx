import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Contact, Store, Checkout } from "../src/WebPages/Index/Index"
import NavBar from './WebPages/Components/NavBar/NavBar';
import Footer from './WebPages/Components/Footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/checkout" element={<Checkout /> } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  ) 
}

export default App
