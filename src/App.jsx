import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import Process from './components/Process'
const App = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Process />
        <Services />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default App