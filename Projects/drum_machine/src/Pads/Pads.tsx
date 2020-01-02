import React from 'react'
import './pads.css'

import { DrumPad } from "./DrumPad";
import { ISound } from '../App'

interface IPads {
  action: React.Dispatch<React.SetStateAction<string>>
  keyPress: string
  soundsId: ISound[]
  audio: (src: string) => () => void
}

export const Pads: React.FC<IPads> = ({ action, soundsId, audio }) => {
  return (
    <ul>
      { soundsId.map((padId) => <DrumPad padId={ padId } key={ padId.letter } action={ action } audio={ audio } />) }
    </ul>
  )
}
