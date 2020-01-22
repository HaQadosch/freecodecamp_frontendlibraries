import React, { MouseEventHandler, useEffect, useState } from 'react'

import { AppDispatch } from "../Store/store"
import { useDispatch } from 'react-redux'

export enum SessionType {
  Session = "Session",
  Break = "Break"
}

interface ITimer {
  reset: () => void
  sessionDuration: number
  breakDuration: number
  setPlay: React.Dispatch<React.SetStateAction<boolean>>
}

const _60minutes = 60 * 60

export const Timer: React.FC<ITimer> = ({ reset, sessionDuration, breakDuration, setPlay }) => {
  const dispatch: AppDispatch = useDispatch()
  console.log({ dispatch })

  const [session, setSession] = useState(SessionType.Session)
  const [timeLeft, setTimeLeft] = useState(sessionDuration)
  const [running, setRunning] = useState(false)
  let [minutesLeft, secondesLeft] = safeTime(timeLeft)

  useEffect(() => {
    const intervalId = running
      ? setInterval(() => { setTimeLeft(time => time - 1) }, 1000)
      : 0
    return () => {
      clearInterval(intervalId as NodeJS.Timeout)
    }
  }, [running])

  useEffect(() => {
    setTimeLeft(session === SessionType.Session ? sessionDuration : breakDuration)
  }, [sessionDuration, breakDuration, session])

  useEffect(() => {
    if (timeLeft <= 0) {
      setSession(session => session === SessionType.Session ? SessionType.Break : SessionType.Session)
      setPlay(true)
    }
    // eslint-disable-next-line
  }, [timeLeft])

  return (
    <article id="timer">
      <div id="timer-label">
        {session} {running ? 'running' : 'stopped'}
      </div>
      <div id="time-left">
        {`${minutesLeft < 10 ? '0' : ''}${minutesLeft}:${secondesLeft < 10 ? '0' : ''}${secondesLeft}`}
      </div>
      <TimerStartStop onClick={() => { setRunning(running => !running) }} />
      <TimerReset onClick={forceReset} />
    </article>
  )

  function forceReset() {
    reset()
    setRunning(false)
    setSession(SessionType.Session)
    setTimeLeft(sessionDuration)
  }
}

function safeTime(time: number): [number, number] {
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
    <button id="start_stop" onClick={onClick}>
      Start/Stop
    </button>
  )
}
interface ITimerReset {
  onClick: MouseEventHandler
}

export const TimerReset: React.FC<ITimerReset> = ({ onClick }) => {

  return (
    <button id="reset" onClick={onClick} >
      Reset
    </button>
  )
}
