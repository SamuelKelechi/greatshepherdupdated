import React from 'react'
import AboutUni from './AboutUni/AboutUni'
import Hero from './HeroSection/Hero'
import Mission from './MissionComp/Mission'
import Objective from './Objective/Objective'
import Quote from './Quote/Quote'
import Values from './Values/Values'
import Vision from './VisionComp/Vision'
import WhyUni from './WhyUni/WhyUni'



function About() {
  return (
    <>
        <Hero />
        <AboutUni />
        <WhyUni />
        <Objective />
        <Vision />
        <Values />
        <Mission />
        <Quote />
    </>
  )
}

export default About
