import { createSlice } from '@reduxjs/toolkit';
import { produce, Draft, setAutoFreeze } from 'immer'

const _60minutes = 60
const _1minute = 1

type DurationState = {
  readonly breakDuration: number
  readonly sessionDuration: number
}

const initialState: DurationState = {
  breakDuration: 5,
  sessionDuration: 25,
}

setAutoFreeze(false)

/**
 * { type: 'duration/reset' }
 * Sets the durations back to the initial state.
 */
const resetReducer = {
  reset: produce((_: Draft<DurationState>) => initialState)
}
/**
 * { type: 'duration/incBreak' }
 * Increases the break time by 1 minute.
 * Max is 60 minutes.
 */
const incBreakReducer = {
  incBreak: produce((draft: Draft<DurationState>) => {
    draft.breakDuration = Math.min(_60minutes, draft.breakDuration + 1)
  })
}
/**
 * { type: 'duration/incSession' }
 * Increases the session time by 1 minute.
 * Max is 60 minutes.
 */
const incSessionReducer = {
  incSession: produce((draft: Draft<DurationState>) => {
    draft.sessionDuration = Math.min(_60minutes, draft.sessionDuration + 1)
  })
}
/**
 * { type: 'duration/decBreak' }
 * Decreases the break time by 1 minute.
 * Min is 1 minute.
 */
const decBreakReducer = {
  decBreak: ({ breakDuration, sessionDuration }: DurationState) => ({
    sessionDuration,
    breakDuration: Math.max(_1minute, breakDuration - 1)
  })
}
/**
 * { type: 'duration/decSession' }
 * Becreases the session time by 1 minute.
 * Min is 1 minute.
 */
const decSessionReducer = {
  decSession: produce((draft: Draft<DurationState>) => {
    draft.sessionDuration = Math.max(_1minute, draft.sessionDuration - 1)
  })
}

export const durationSlice = createSlice({
  name: 'duration',
  initialState,
  reducers: {
    ...resetReducer,
    ...incBreakReducer,
    ...incSessionReducer,
    ...decBreakReducer,
    ...decSessionReducer
  }
})
