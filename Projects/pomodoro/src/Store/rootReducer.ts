import { combineReducers } from '@reduxjs/toolkit';
import { durationSlice } from "./Slices/durationSlice"

const { reducer: durationReducer, actions: { reset: resetDuration, incBreak, incSession, decBreak, decSession } } = durationSlice

export const rootReducer = combineReducers({
  duration: durationReducer
})

export type RootState = ReturnType<typeof rootReducer>

export {
  resetDuration, incBreak, incSession, decBreak, decSession
}