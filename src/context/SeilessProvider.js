import React from 'react'
import {SeilessContext} from "./SeilessContext"
import { useState } from 'react'

const SeilessProvider = (props) => {

const [photos, setPhotos] = useState([])

  return (
    <SeilessContext.Provider value={{photos}}>
        {props.children}
    </SeilessContext.Provider>
  )
}

export default SeilessProvider