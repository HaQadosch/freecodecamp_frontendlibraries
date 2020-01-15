import React, { MouseEventHandler } from 'react'

interface ISession {

}

export const Session: React.FC<ISession> = () => {
  const duration = 5 * 60

  return (
    <div id="session-label">
      Session Length <SessionLength duration={duration} />
      <SessionInc onClick={() => { }} />
      <SessionDec onClick={() => { }} />
    </div>
  )
}

interface ISessionInc {
  onClick: MouseEventHandler
}

export const SessionInc: React.FC<ISessionInc> = ({ onClick }) => {

  return (
    <button id="session-increment" onClick={onClick}>
      Inc Session
    </button>
  )
}


interface ISessionDec {
  onClick: MouseEventHandler
}

export const SessionDec: React.FC<ISessionDec> = ({ onClick }) => {

  return (
    <button id="session-decrement" onClick={onClick}>
      Dec Session
    </button>
  )
}

interface ISessionLength {
  duration: number
}

const _25minutes = 25 * 60
const _60minutes = 60 * 60

export const SessionLength: React.FC<ISessionLength> = ({ duration = _25minutes }) => {
  let safeDuration: number = duration < 0 ? 0 : duration > _60minutes ? _60minutes : duration
  const minutes = Math.ceil(safeDuration / 60)
  const secondes = safeDuration - (minutes * 60)

  return (
    <span id="session-length">
      {`${minutes < 10 ? '0' : ''}${minutes}:${secondes < 10 ? '0' : ''}${secondes}`}
    </span>
  )
}