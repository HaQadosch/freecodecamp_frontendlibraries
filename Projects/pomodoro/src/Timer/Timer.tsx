import React, { MouseEventHandler, useState } from 'react'

export enum SessionType {
  Session = "Session",
  Break = "Break"
}

interface ITimer {
  // Number of seconds left before switching sessions.
  timeLeft: number
  sessionType: SessionType
  reset: () => void
}

const _60minutes = 60 * 60

export const Timer: React.FC<ITimer> = ({ timeLeft = _60minutes, sessionType = SessionType.Session, reset }) => {
  const safeTimeLeft: number = timeLeft < 0 ? 0 : timeLeft > _60minutes ? _60minutes : timeLeft
  const minutesLeft = Math.ceil(safeTimeLeft / 60)
  const secondesLeft = safeTimeLeft - (minutesLeft * 60)

  const [running, setRunning] = useState(false)

  return (
    <article id="timer">
      <div id="timer-label">
        { sessionType } { running ? 'running' : 'not running' }
      </div>
      <div id="time-left">
        { `${ minutesLeft < 10 ? '0' : '' }${ minutesLeft }:${ secondesLeft < 10 ? '0' : '' }${ secondesLeft }` }
      </div>
      <TimerStartStop onClick={ () => { setRunning(running => !running) } } />
      <TimerReset onClick={ () => { reset(); setRunning(false) } } />
    </article>
  )
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
