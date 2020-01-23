import { timerSlice } from './Slices/timerSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { durationSlice } from "./Slices/durationSlice"

const {
  reducer: durationReducer,
  actions: { reset: resetDuration, incBreak, incSession, decBreak, decSession }
} = durationSlice
const {
  reducer: timerReducer,
  actions: { reset: resetTimer, play, pause, tick }
} = timerSlice

export const rootReducer = combineReducers({
  duration: durationReducer,
  timer: timerReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {
  resetDuration, incBreak, incSession, decBreak, decSession,
  resetTimer, play, pause, tick
}