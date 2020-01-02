import React, { useState } from 'react';
import './App.css';

import { Display } from './Display/Display';
import { Pads } from "./Pads/Pads";

export interface ISound {
  letter: string,
  source: string,
  display: string
}

const soundsId = [
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

export const App: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>('Press the letters or Click to play')
  const [keyPress, setKeyPress] = useState<string>('')

  return (
    <React.StrictMode>
      <main className="App" id="drum-machine" onKeyDown={ handleKey } tabIndex={ 0 } >
        <Display text={ displayText } />
        <Pads soundsId={ soundsId } action={ setDisplayText } keyPress={ keyPress } audio={ audio } />
      </main>
    </React.StrictMode >
  )

  function handleKey ({ key }: React.KeyboardEvent) {
    const keyUp = key.toUpperCase()
    const sound = soundsId.find(({ letter }) => keyUp === letter)

    if (sound !== undefined) {
      console.log({ keyUp })
      setKeyPress(keyUp)
      setDisplayText(sound.display)
      audio(sound.source)()
    }
  }

  function audio (src: string) {
    const audioElt = new window.Audio(src)
    return function play_ () {
      audioElt.play()
    }
  }
}
