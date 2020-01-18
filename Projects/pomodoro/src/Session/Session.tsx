import React, { MouseEventHandler } from 'react'

const _25minutes = 25 * 60
const _60minutes = 60 * 60

interface ISession {
  sessionDuration: number
  setSessionDuration: React.Dispatch<React.SetStateAction<number>>
}

export const Session: React.FC<ISession> = ({ sessionDuration, setSessionDuration }) => {
  const _1minute = 60

  return (
    <div id="session-label">
      Session Length <SessionLength duration={ sessionDuration } />
      <SessionInc onClick={ () => { setSessionDuration(duration => duration + _1minute) } } />
      <SessionDec onClick={ () => { setSessionDuration(duration => duration - _1minute) } } />
    </div>
  )
}

interface ISessionInc {
  onClick: MouseEventHandler
}

export const SessionInc: React.FC<ISessionInc> = ({ onClick }) => {

  return (
    <button id="session-increment" onClick={ onClick }>
      Inc Session
    </button>
  )
}


interface ISessionDec {
  onClick: MouseEventHandler
}

export const SessionDec: React.FC<ISessionDec> = ({ onClick }) => {

  return (
    <button id="session-decrement" onClick={ onClick }>
      Dec Session
    </button>
  )
}

interface ISessionLength {
  duration: number
}


export const SessionLength: React.FC<ISessionLength> = ({ duration = _25minutes }) => {
  const safeDuration: number = duration < 0 ? 0 : duration > _60minutes ? _60minutes : duration
  const safeMinutes = Math.ceil(safeDuration / 60)

  return (
    <span id="session-length">
      { safeMinutes }
    </span>
  )
}