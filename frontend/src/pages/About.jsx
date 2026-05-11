import React from 'react'
import Navbar from '../components/Navbar'
import MyIntro from '../components/MyIntro'
import ExperienceSection from '../components/ExperienceSection'
import Education from '../components/Education'

function About() {
  return (
    <div>
        <Navbar/>
        <MyIntro/>
        <ExperienceSection/>
        <Education/>
    </div>
  )
}

export default About