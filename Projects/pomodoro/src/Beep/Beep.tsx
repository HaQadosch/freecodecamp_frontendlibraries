import React, { useRef, useEffect } from 'react'

interface IBeep {
  play: boolean
  forceStop: boolean
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
}

export const Beep: React.FC<IBeep> = ({ play, setPlay, forceStop }) => {
  const refAudio = useRef<HTMLAudioElement>(null)

  useEffect(
    () => {
      if (play) {
        refAudio.current?.play()
        setPlay(false)
      }
      // eslint-disable-next-line
    }, [play])

  useEffect(
    () => {
      refAudio.current?.pause?.()
      if (refAudio.current) refAudio.current.currentTime = 0
      // eslint-disable-next-line
    }, [forceStop])

  return <audio src="/t-rex-roar.mp3" id="beep" ref={ refAudio } />
}