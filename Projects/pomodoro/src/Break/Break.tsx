import React, { MouseEventHandler } from 'react'

const _1minute = 60
const _5minutes = 5 * 60
const _60minutes = 60 * 60

interface IBreak {
  breakDuration: number
  setBreakDuration: React.Dispatch<React.SetStateAction<number>>
  running: boolean
}

export const Break: React.FC<IBreak> = ({ breakDuration, setBreakDuration, running }) => {

  return (
    <div id="break-label">
      Break Length <BreakLength duration={ breakDuration } />
      <BreakInc onClick={ () => { if (!running && breakDuration < _60minutes) setBreakDuration(duration => duration + _1minute) } } />
      <BreakDec onClick={ () => { if (!running && breakDuration > _1minute) setBreakDuration(duration => duration - _1minute) } } />
    </div>
  )
}

interface IBreakInc {
  onClick: MouseEventHandler
}

export const BreakInc: React.FC<IBreakInc> = ({ onClick }) => {

  return (
    <button id="break-increment" onClick={ onClick }>
      Inc Break
    </button>
  )
}


interface IBreakDec {
  onClick: MouseEventHandler
}

export const BreakDec: React.FC<IBreakDec> = ({ onClick }) => {

  return (
    <button id="break-decrement" onClick={ onClick }>
      Dec Break
    </button>
  )
}

interface IBreakLength {
  duration: number
}


export const BreakLength: React.FC<IBreakLength> = ({ duration = _5minutes }) => {
  const safeDuration: number = duration < _1minute ? _1minute : duration > _60minutes ? _60minutes : duration
  const safeMinutes = Math.floor(safeDuration / 60)

  return (
    <span id="break-length">
      { safeMinutes }
    </span>
  )
}
