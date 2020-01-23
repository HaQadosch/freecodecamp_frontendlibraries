import React, { MouseEventHandler, useEffect } from 'react'

import { AppDispatch } from "../Store/store"
import { useDispatch, useSelector } from 'react-redux'
import { RootState, resetDuration, resetTimer, play, pause, tick } from "../Store/rootReducer";

import { SessionType } from "../Store/Slices/timerSlice";

const _60minutes = 60 * 60

export const Timer: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const {
    timer: { type, running, clock },
    duration: { breakDuration, sessionDuration }
  } = useSelector((state: RootState) => state)

  const nextDuration = type === SessionType.Session ? breakDuration : sessionDuration

  useEffect(() => {
    const intervalId = running
      ? setInterval(() => { dispatch(tick(nextDuration)) }, 1000)
      : 0
    return () => {
      clearInterval(intervalId as NodeJS.Timeout)
    }
    // eslint-disable-next-line
  }, [running])

  return (
    <article id="timer">
      <div id="timer-label">
        { type } { running ? 'running' : 'stopped' }
      </div>
      <div id="time-left">
        { (() => {
          let [minutesLeft, secondesLeft] = safeTime(clock)
          return ` ${ minutesLeft < 10 ? '0' : '' }${ minutesLeft }:${ secondesLeft < 10 ? '0' : '' }${ secondesLeft }`
        })() }
      </div>
      <TimerStartStop onClick={ () => { dispatch(running ? pause() : play()) } } />
      <TimerReset onClick={ forceReset } />
    </article>
  )

  function forceReset () {
    dispatch(resetDuration())
    dispatch(resetTimer())
  }
}

function safeTime (time: number): [number, number] {
  const safeTimeLeft: number = time < 0 ? 0 : time > _60minutes ? _60minutes : time
  let minutesLeft = Math.floor(safeTimeLeft / 60)
  let secondesLeft = safeTimeLeft - (minutesLeft * 60)

  return [minutesLeft, secondesLeft]
}

interface ITimerStartStop {
  onClick: MouseEventHandler
}

export const TimerStartStop: React.FC<ITimerStartStop> = ({ onClick }) => {

  return (
    <button id="start_stop" onClick={ onClick }>
      Start/Stop
    </button>
  )
}
interface ITimerReset {
  onClick: MouseEventHandler
}

export const TimerReset: React.FC<ITimerReset> = ({ onClick }) => {

  return (
    <button id="reset" onClick={ onClick } >
      Reset
    </button>
  )
}
