import React, { useRef, useEffect } from 'react'

import { RootState } from "../Store/rootReducer";
import { useSelector } from 'react-redux'

interface IBeep {

}

export const Beep: React.FC<IBeep> = () => {

  const { play } = useSelector(({ beeper }: RootState) => beeper)
  const refAudio = useRef<HTMLAudioElement>(null)

  useEffect(
    () => {
      if (play > 0) {
        refAudio.current?.play()
      } else if (play === 0) {
        refAudio.current?.pause?.()
      } else {
        refAudio.current?.pause?.()
        if (refAudio.current) refAudio.current.currentTime = 0
      }
      // eslint-disable-next-line
    }, [play])

  return <audio src="/t-rex-roar.mp3" id="beep" ref={ refAudio } />
}