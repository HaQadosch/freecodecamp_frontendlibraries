import React, { useRef, useEffect } from 'react'

import { AppDispatch } from "../Store/store"
import { stop, RootState } from "../Store/rootReducer";
import { useDispatch, useSelector } from 'react-redux'

interface IBeep {

}

export const Beep: React.FC<IBeep> = () => {
  const dispatch: AppDispatch = useDispatch()

  const { play } = useSelector(({ beeper }: RootState) => beeper)
  const refAudio = useRef<HTMLAudioElement>(null)

  useEffect(
    () => {
      if (play) {
        refAudio.current?.play()
        dispatch(stop())
      } else {
        refAudio.current?.pause?.()
        if (refAudio.current) refAudio.current.currentTime = 0
      }
      // eslint-disable-next-line
    }, [play])

  return <audio src="/t-rex-roar.mp3" id="beep" ref={ refAudio } />
}