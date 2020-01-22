import { createSlice } from '@reduxjs/toolkit'
import { produce, Draft } from 'immer'

const _25minutes = 25 * 60

export enum SessionType {
  Session = "Session",
  Break = "Break"
}

type TimerState = {
  readonly running: boolean
  readonly clock: number
  readonly type: SessionType
}

const initialState: TimerState = {
  running: false,
  clock: _25minutes,
  type: SessionType.Session
}

/**
 * { type: 'timer/reset' }
 * Sets the timer back to the initial state.
 */
const resetReducer = {
  reset: (state: TimerState) => produce(state, (_: Draft<TimerState>) => initialState)
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    ...resetReducer
  }
})
