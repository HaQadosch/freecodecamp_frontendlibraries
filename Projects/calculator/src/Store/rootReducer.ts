import { combineReducers } from "@reduxjs/toolkit";
import { totalSlice } from "./Slices/totalSlice";
import { historySlice } from "./Slices/historySlice";
import { tempValueSlice } from "./Slices/tempTotalSlice";

const { reducer: totalReducer, actions: { setTotal, clear, appendTotal } } = totalSlice
const { reducer: historyReducer, actions: { pushHistory, clear: clearHistory } } = historySlice
const { reducer: tempValueReducer, actions: { setTemp, clear: clearTemp } } = tempValueSlice

export const rootReducer = combineReducers({
  total: totalReducer,
  history: historyReducer,
  temp: tempValueReducer
})

export type RootState = ReturnType<typeof rootReducer>
export { setTotal, clear, appendTotal, pushHistory, clearHistory, setTemp, clearTemp }