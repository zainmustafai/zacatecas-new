import React from 'react'
import Park4Hero from '../Components/Park4Hero'
import Park4Location from '../Components/Park4Location'
import Park4Area from '../Components/Park4Area'
import Park4Airport from '../Components/Park4Airport'
import Companies from '../Components/Companies'
import Countactus from '../Components/Countactus'





export default function Park4() {
  return (
    <div style={{overflowX:'hidden'}}>
        <Park4Hero/> 
        <Park4Location/>
        <Park4Area/>
        <Park4Airport/>
        <Companies/>
        <Countactus/>
        
        

    </div>
  )
}
