import React from 'react'
import './pads.css'

import { DrumPad } from "./DrumPad";

interface IPads {
  action: React.Dispatch<React.SetStateAction<string>>
}

const padsId = [
  { letter: 'Q', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_voice_character_head_shake_dazed_high_pitched_001_40288.mp3", display: 'head shake dazed 1' },
  { letter: 'W', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_voice_character_head_shake_dazed_high_pitched_003_40290.mp3", display: 'head shake dazed 3' },
  { letter: 'E', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_voice_character_head_shake_dazed_high_pitched_004_40291.mp3", display: 'head shake dazed 4' },
  { letter: 'A', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_voice_character_head_shake_dazed_high_pitched_005_40292.mp3", display: 'head shake dazed 5' },
  { letter: 'S', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_voice_character_head_shake_dazed_high_pitched_006_40293.mp3", display: 'head shake dazed 6' },
  { letter: 'D', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_voice_character_head_shake_dazed_high_pitched_007_40294.mp3", display: 'head shake dazed 7' },
  { letter: 'Z', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_character_cute_high_pitched_voice_says_uh_huh_38465.mp3", display: 'uh uh' },
  { letter: 'X', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_character_cute_high_pitched_struggle_strain_38464.mp3", display: 'struggle strain' },
  { letter: 'C', source: "./Assets/Sounds/Cartoons/zapsplat_cartoon_character_cute_high_pitched_sneeze_008_38459.mp3", display: 'sneeze' },
]

export const Pads: React.FC<IPads> = ({ action }) => {
  return (
    <ul>
      { padsId.map((padId) => <DrumPad padId={ padId } key={ padId.letter } action={ action } />) }
    </ul>
  )
}
