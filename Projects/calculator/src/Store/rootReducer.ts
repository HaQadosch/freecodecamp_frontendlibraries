import { combineReducers } from "@reduxjs/toolkit";
import { totalSlice } from "./Slices/totalSlice";
import { historySlice } from "./Slices/historySlice";

const { reducer: totalReducer, actions: { setTotal, clear, appendTotal } } = totalSlice
const { reducer: historyReducer, actions: { pushHistory, clear: clearHistory } } = historySlice

export const rootReducer = combineReducers({
  total: totalReducer,
  history: historyReducer
})

export type RootState = ReturnType<typeof rootReducer>
export { setTotal, clear, appendTotal, pushHistory, clearHistory }