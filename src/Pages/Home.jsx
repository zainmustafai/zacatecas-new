import React from 'react'
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import StrategicLocation from '../Components/StrategicLocation'
import MajorSeaPorts from '../Components/MajorSeaPorts'
import DistanceTOMainBorder from '../Components/DistanceTOMainBorder'
import WhyZacatecas from '../Components/WhyZacatecas'

export const Home = () => {
  return (
    <div style={{overflowX:'hidden'}}>
        <HeroSection/>
        <About/>
        <StrategicLocation/>
        <MajorSeaPorts/>
        <DistanceTOMainBorder/>
        <WhyZacatecas/>
    </div>
  )
}
