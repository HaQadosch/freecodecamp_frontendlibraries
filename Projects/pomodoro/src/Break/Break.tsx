import React, { MouseEventHandler } from 'react'

interface IBreak {

}

export const Break: React.FC<IBreak> = () => {

  return (
    <div>
      Break Length <BreakLength />
      <BreakInc onClick={ () => { } } />
      <BreakDec onClick={ () => { } } />
    </div>
  )
}

interface IBreakInc {
  onClick: MouseEventHandler
}

export const BreakInc: React.FC<IBreakInc> = () => {

  return (
    <button>
      Inc Break
    </button>
  )
}


interface IBreakDec {
  onClick: MouseEventHandler
}

export const BreakDec: React.FC<IBreakDec> = () => {

  return (
    <button>
      Dec Break
    </button>
  )
}

interface IBreakLength {

}

export const BreakLength: React.FC<IBreakLength> = () => {

  return (
    <span>
      05:00
    </span>
  )
}

