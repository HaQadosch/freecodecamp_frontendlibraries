import React, { MouseEventHandler } from 'react'

const _5minutes = 5 * 60
const _60minutes = 60 * 60

interface IBreak {
  breakDuration: number
  setBreakDuration: React.Dispatch<React.SetStateAction<number>>
}

export const Break: React.FC<IBreak> = ({ breakDuration, setBreakDuration }) => {
  const _1minute = 60

  return (
    <div id="break-label">
      Break Length <BreakLength duration={ breakDuration } />
      <BreakInc onClick={ () => { setBreakDuration(duration => duration + _1minute) } } />
      <BreakDec onClick={ () => { setBreakDuration(duration => duration - _1minute) } } />
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
  const safeDuration: number = duration < 0 ? 0 : duration > _60minutes ? _60minutes : duration
  const safeMinutes = Math.ceil(safeDuration / 60)

  return (
    <span id="break-length">
      { safeMinutes }
    </span>
  )
}
