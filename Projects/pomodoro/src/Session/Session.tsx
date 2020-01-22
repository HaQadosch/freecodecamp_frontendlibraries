import React from 'react'

import { AppDispatch } from "../Store/store"
import { incSession, decSession, RootState } from "../Store/rootReducer";
import { useDispatch, useSelector } from 'react-redux'

export const Session: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { sessionDuration } = useSelector(({ duration }: RootState) => duration)

  return (
    <div id="session-label">
      Session Length <span id="session-length">{sessionDuration}</span>
      <button id="session-increment" onClick={() => { dispatch(incSession()) }} >
        Inc Session
      </button>
      <button id="session-decrement" onClick={() => { dispatch(decSession()) }} >
        Dec Session
      </button>
    </div>
  )
}
