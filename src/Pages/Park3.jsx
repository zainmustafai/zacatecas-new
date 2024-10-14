import React from 'react'
import Park3Hero from '../Components/Park3Hero'
import Park3Location from '../Components/Park3Location'
import Park3Area from '../Components/Park3Area'
import Companies from '../Components/Companies'
import Countactus from '../Components/Countactus'





export default function Park3() {
  return (
    <div style={{overflowX:'hidden'}}>
        <Park3Hero/> 
        <Park3Location/>
        <Park3Area/>
        <Companies/>
        <Countactus/>
        
        

    </div>
  )
}
