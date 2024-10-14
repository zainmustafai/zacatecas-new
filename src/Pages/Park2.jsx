import React from 'react'
import Park2Hero from '../Components/Park2Hero'
import Park2Location from '../Components/Park2Location'
import Park2Area from '../Components/Park2Area'
import Companies from '../Components/Companies'
import Countactus from '../Components/Countactus'




export default function Park2() {
  return (
    <div style={{overflowX:'hidden'}}>
        <Park2Hero/> 
        <Park2Location/>
        <Park2Area/>
        <Companies/>
        <Countactus/>
        
        

    </div>
  )
}
