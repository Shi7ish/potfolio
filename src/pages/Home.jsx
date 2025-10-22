import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import FeedBack from '../components/FeedBack'
import Email from '../components/Email'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />  
        <Hero />
        <Logos />
        <Skills />
        <Projects />
        <FeedBack />
        <Email />
      </div>
    </div>
  )
}

export default Home
