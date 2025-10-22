import React from 'react'
import Email from './../components/Email';
import Navbar from '../components/Navbar';
import MyInfo from '../components/MyInfo';
import AboutBody from '../components/AboutBody';

const About = () => {
  return (
    <div>
      <Navbar />
      <MyInfo />
      <AboutBody />
      <Email />
    </div>
  )
}

export default About
