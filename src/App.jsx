import { useState } from 'react';
import './App.css'
import Navbar from "./Navbar"
import Home from "./components/Home"
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
  <>
  <Navbar />
  <div className='container'>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  </div>
  </>
  )}

export default App
