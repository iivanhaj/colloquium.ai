import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Features from './Components/Features/Features'
import AboutUs from './Components/AboutUs/AboutUs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar />
    <Features />
    <AboutUs />
    {/*<Home />
    */ }
    {/*
  <Footer />*/}
    </>
  )
}

export default App