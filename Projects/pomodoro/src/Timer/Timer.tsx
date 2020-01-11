import React, { MouseEventHandler } from 'react'

interface ITimer {

}

export const Timer: React.FC<ITimer> = () => {

  return (
    <div>
      Timer
      <TimerStartStop onClick={ () => { } } />
      <TimerReset onClick={ () => { } } />
    </div>
  )
}

interface ITimerStartStop {
  onClick: MouseEventHandler
}

export const TimerStartStop: React.FC<ITimerStartStop> = () => {

  return (
    <button>
      Start/Stop
    </button>
  )
}
interface ITimerReset {
  onClick: MouseEventHandler
}

export const TimerReset: React.FC<ITimerReset> = () => {

  return (
    <button>
      Reset
    </button>
  )
}
