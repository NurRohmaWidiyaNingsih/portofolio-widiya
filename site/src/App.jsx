import React from 'react'
import TopHero from './components/TopHero'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  return (
    <div>
      <Navbar />
      <TopHero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}
