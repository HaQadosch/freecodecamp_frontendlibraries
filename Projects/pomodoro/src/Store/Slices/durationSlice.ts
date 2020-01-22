import { createSlice } from '@reduxjs/toolkit';
import { produce, Draft } from 'immer'

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

/**
 * { type: 'duration/reset' }
 * Sets the durations back to the initial state.
 */
const resetReducer = {
  reset: (state: DurationState) => produce(state, (_: Draft<DurationState>) => initialState)
}
/**
 * { type: 'duration/incBreak' }
 * Increases the break time by 1 minute.
 * Max is 60 minutes.
 */
const incBreakReducer = {
  incBreak: (state: DurationState) => produce(state, (draft: Draft<DurationState>) => {
    draft.breakDuration = state.breakDuration >= _60minutes ? _60minutes : state.breakDuration + 1
  })
}
/**
 * { type: 'duration/incSession' }
 * Increases the session time by 1 minute.
 * Max is 60 minutes.
 */
const incSessionReducer = {
  incSession: (state: DurationState) => produce(state, (draft: Draft<DurationState>) => {
    draft.sessionDuration = state.sessionDuration >= _60minutes ? _60minutes : state.sessionDuration + 1
  })
}
/**
 * { type: 'duration/decBreak' }
 * Decreases the break time by 1 minute.
 * Min is 1 minute.
 */
const decBreakReducer = {
  decBreak: (state: DurationState) => produce(state, (draft: Draft<DurationState>) => {
    draft.breakDuration = state.breakDuration <= _1minute ? _1minute : state.breakDuration - 1
  })
}
/**
 * { type: 'duration/decSession' }
 * Becreases the session time by 1 minute.
 * Min is 1 minute.
 */
const decSessionReducer = {
  decSession: (state: DurationState) => produce(state, (draft: Draft<DurationState>) => {
    draft.sessionDuration = state.sessionDuration <= _1minute ? _1minute : state.sessionDuration - 1
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
