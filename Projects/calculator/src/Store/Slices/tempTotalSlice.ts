import { produce, Draft } from "immer"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ITempState = {
  tempValue: number
}

const initialState: ITempState = { tempValue: 0 }

const clearReducer = {
  clear: (state: ITempState) => produce(state, (_: Draft<ITempState>) => initialState)
}

export interface ISetTempPayload {
  tempValue: number
}

const setTempReducer = {
  setTemp: (state: ITempState, action: PayloadAction<ISetTempPayload>) => produce(state, (_: Draft<ITempState>) => action.payload)
}

export const tempValueSlice = createSlice({
  name: 'tempTotal',
  initialState,
  reducers: {
    ...clearReducer,
    ...setTempReducer
  }
})