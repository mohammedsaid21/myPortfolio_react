import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/nav/Nav'
import Experience from './Components/Experience/Experience'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import './index.css'
import AnimatedCursor from 'react-animated-cursor'

const App = () => {
  return (
    <>
    <AnimatedCursor innerSize={8} outerSize={8}
      color='193, 11, 111' outerAlpha={0.2}
      innerScale={0.7} outerScale={5} 
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]} />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App