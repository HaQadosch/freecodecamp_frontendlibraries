import React, { MouseEventHandler } from 'react'

export enum SessionType {
  Session = "Session",
  Break = "Break"
}

interface ITimer {
  timeLeft: number
  sessionType: SessionType
  reset: () => void
  running: boolean
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
}

const _60minutes = 60 * 60

export const Timer: React.FC<ITimer> = ({ running, setRunning, timeLeft = _60minutes, sessionType = SessionType.Session, reset }) => {
  const safeTimeLeft: number = timeLeft < 0 ? 0 : timeLeft > _60minutes ? _60minutes : timeLeft
  let minutesLeft = Math.floor(safeTimeLeft / 60)
  let secondesLeft = safeTimeLeft - (minutesLeft * 60)

  return (
    <article id="timer">
      <div id="timer-label">
        { sessionType } { running ? 'running' : 'stopped' }
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
