import React from 'react'
import './pads.css'

import { DrumPad } from "./DrumPad";

interface IPads {

}

const padsId = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

export const Pads: React.FC<IPads> = ({ }) => {
  return (
    <ul>
      { padsId.map((padId) => <DrumPad padId={ padId } key={ padId } />) }
    </ul>
  )
}
