import { produce, Draft } from "immer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITotalState {
  readonly value: number
}

interface ISetTotalPayload {
  value: number
}

const initialState: ITotalState = {
  value: 0
}

const setTotalReducer = {
  setTotal: (state: ITotalState, action: PayloadAction<ISetTotalPayload>) => produce(state, (_: Draft<ITotalState>) => action.payload)
}

const clearReducer = {
  clear: (state: ITotalState) => produce(state, (_: Draft<ITotalState>) => initialState)
}

export const totalSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    ...setTotalReducer,
    ...clearReducer
  }
})