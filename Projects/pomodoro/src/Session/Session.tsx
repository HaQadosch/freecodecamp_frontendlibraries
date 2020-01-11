import React, { MouseEventHandler } from 'react'

interface ISession {

}

export const Session: React.FC<ISession> = () => {

  return (
    <div>
      Session Length <SessionLength />
      <SessionInc onClick={ () => { } } />
      <SessionDec onClick={ () => { } } />
    </div>
  )
}

interface ISessionInc {
  onClick: MouseEventHandler
}

export const SessionInc: React.FC<ISessionInc> = () => {

  return (
    <button>
      Inc Session
    </button>
  )
}


interface ISessionDec {
  onClick: MouseEventHandler
}

export const SessionDec: React.FC<ISessionDec> = () => {

  return (
    <button>
      Dec Session
    </button>
  )
}

interface ISessionLength {

}

export const SessionLength: React.FC<ISessionLength> = () => {

  return (
    <span>
      25:00
    </span>
  )
}