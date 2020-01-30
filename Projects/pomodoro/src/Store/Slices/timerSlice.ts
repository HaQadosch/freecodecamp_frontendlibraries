import { createSlice, PayloadAction } from '@reduxjs/toolkit'
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
  reset: produce((_: Draft<TimerState>) => initialState)
}
/**
 * { type: 'timer/play' }
 * Starts/Resumes the timer.
 */
const playReducer = {
  play: produce((draft: Draft<TimerState>) => {
    draft.running = true
  })
}
/**
 * { type: 'timer/pause' }
 * Pauses the timer.
 */
const pauseReducer = {
  pause: produce((draft: Draft<TimerState>) => {
    draft.running = false
  })
}

/**
 * { type: 'timer/tick', payload: 25 }
 * Reduces the time by 1 seconde.
 * Sets the clock to the payload value if clock reaches 0.
 */
const tickReducer = {
  tick: produce((draft: Draft<TimerState>, action: PayloadAction<number>) => {
    if (draft.clock < 0) {
      draft.type = draft.type === SessionType.Session ? SessionType.Break : SessionType.Session
      draft.clock = action.payload || _25minutes
    } else {
      draft.clock -= 1
    }
  })
}

/**
 * { type: 'timer/setClock', payload: 25 }
 * Sets the clock to the payload value.
 */
const setClockReducer = {
  setClock: produce((draft: Draft<TimerState>, action: PayloadAction<number>) => {
    draft.clock = action.payload || _25minutes
  })
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    ...resetReducer,
    ...playReducer,
    ...pauseReducer,
    ...tickReducer,
    ...setClockReducer
  }
})
