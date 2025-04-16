import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonial from './components/Testimonial'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import Features from './components/Features'
function App() {

  return (
    <>
        <div className="text-blue-400">Test màu</div>
      {/* <BrowserRouter>
        <Navbar />
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
        <Footer />
      </BrowserRouter> */}
    </>
  )
}

export default App
