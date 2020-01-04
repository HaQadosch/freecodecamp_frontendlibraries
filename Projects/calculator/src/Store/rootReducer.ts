import { combineReducers } from "@reduxjs/toolkit";
import { totalSlice } from "./Slices/totalSlice";

const { reducer: totalReducer, actions: { setTotal, clear, appendTotal } } = totalSlice

export const rootReducer = combineReducers({
  total: totalReducer
})

export type RootState = ReturnType<typeof rootReducer>
export { setTotal, clear, appendTotal }