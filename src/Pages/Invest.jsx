import React from 'react'
// import InvestHeroSection from '../Components/InvestHeroSection'
// import LatestNews from '../Components/LatestNews'
import WhyZacatecas1 from '../Components/WhyZacatecas1'
import About1 from '../Components/About1'
import Investers from '../Components/Investers'
import WorkForce from '../Components/WorkForce'
import Automotive from '../Components/Automotive'
import MeetOurInvestors from '../Components/MeetOurInvestors'
import ZacatecusIndustries from '../Components/ZacatecusIndustries'
import IndustrialParks from '../Components/IndustrialParks'
import Zacatecas from '../Components/Zacatecas'
import Services from '../Components/Services'
// import LetConnectUs from '../Components/LetConnectUs'
import HomeHero from './HomePage/HomeHero/HomeHero'

export default function Invest() {

  return (
    <div style={{ overflowX: 'hidden' }}>
      <HomeHero />
      {/* <InvestHeroSection/> */}
      {/* <LatestNews/> */}
      <WhyZacatecas1 />
      <About1 />
      <Investers />
      <WorkForce />
      <Automotive />
      <MeetOurInvestors />
      <ZacatecusIndustries />
      <Zacatecas />
      <IndustrialParks />
      <Services />
      {/* <LetConnectUs /> */}
    </div>
  )
}
