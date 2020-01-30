import { timerSlice } from './Slices/timerSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { durationSlice } from "./Slices/durationSlice"
import { beeperSlice } from "./Slices/beepSlice";

const {
  reducer: durationReducer,
  actions: { reset: resetDuration, incBreak, incSession, decBreak, decSession }
} = durationSlice
const {
  reducer: timerReducer,
  actions: { reset: resetTimer, play, pause, tick, setClock }
} = timerSlice
const {
  reducer: beeperReducer,
  actions: { reset: resetBeeper, play: playBeeper, stop, pause: pauseBeeper }
} = beeperSlice

export const rootReducer = combineReducers({
  duration: durationReducer,
  timer: timerReducer,
  beeper: beeperReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {
  resetDuration, incBreak, incSession, decBreak, decSession,
  resetTimer, play, pause, tick, setClock,
  resetBeeper, playBeeper, stop, pauseBeeper
}