import React, { MouseEventHandler } from 'react'

interface IBreak {

}

export const Break: React.FC<IBreak> = () => {
  const duration = 5 * 60

  return (
    <div id="break-label">
      Break Length <BreakLength duration={ duration } />
      <BreakInc onClick={ () => { } } />
      <BreakDec onClick={ () => { } } />
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

const _5minutes = 5 * 60
const _60minutes = 60 * 60

export const BreakLength: React.FC<IBreakLength> = ({ duration = _5minutes }) => {
  let safeDuration: number = duration < 0 ? 0 : duration > _60minutes ? _60minutes : duration
  const minutes = Math.ceil(safeDuration / 60)
  const secondes = safeDuration - (minutes * 60)

  return (
    <span id="break-length">
      { `${ minutes < 10 ? '0' : '' }${ minutes }:${ secondes < 10 ? '0' : '' }${ secondes }` }
    </span>
  )
}

