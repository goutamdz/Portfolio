import React from 'react'
import Navbar from '../components/Navbar'
import HeroPage from '../components/HeroPage'
import SkillsSection from '../components/SkillsSection'
import Contact from '../components/Contact'
import About from '../components/MyIntro'

function Home() {
  return (
    <div>
        <Navbar/>
        <HeroPage/>
        <SkillsSection/>
        <Contact/>
    </div>
  )
}

export default Home