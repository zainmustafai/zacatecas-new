import React from 'react'
import QualityOfLifeHero from '../Components/QualityOfLifeHero'
import ZacatecasCity from '../Components/ZacatecasCity'
import Housing from '../Components/Housing'
import Schools from '../Components/Schools'
import ZacatecasHotels from '../Components/ZacatecasHotels'
import ZacatecasRestaurents from '../Components/ZacatecasRestaurents'

export default function QualityOfLife() {
  return (
    <div style={{overflowX:'hidden'}}>
        <QualityOfLifeHero/>
        <ZacatecasCity/>
        <Housing/>
        <Schools/>
        <ZacatecasHotels/>
        <ZacatecasRestaurents/>
    </div>
  )
}
