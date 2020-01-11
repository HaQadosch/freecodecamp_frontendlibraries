import React from 'react'

interface IBeep {

}

export const Beep: React.FC<IBeep> = () => {

  return (
    <audio src="/t-rex-roar.mp3">

    </audio>
  )
}