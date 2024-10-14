import React from 'react'
import { ReactImageTurntable } from 'react-image-turntable'

const TurnTable = ({images}) => {
    return (
        <ReactImageTurntable 
        images={images}
        movementSensitivity={20}
        
         />
    )
}

export default TurnTable
