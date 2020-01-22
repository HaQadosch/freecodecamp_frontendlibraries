import React from 'react'
import { AppDispatch } from '../Store/store'
import { RootState, incBreak, decBreak } from "../Store/rootReducer";
import { useDispatch, useSelector } from 'react-redux'

export const Break: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const { breakDuration } = useSelector(({ duration }: RootState) => duration)

  return (
    <div id="break-label">
      Break Length <span id="break-length">{breakDuration}</span>
      <button id="break-increment" onClick={() => { dispatch(incBreak()) }}>
        Inc Break
      </button>
      <button id="break-decrement" onClick={() => { dispatch(decBreak()) }}>
        Dec Break
      </button>
    </div>
  )
}
