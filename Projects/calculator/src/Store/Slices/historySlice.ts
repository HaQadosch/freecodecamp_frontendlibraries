import { produce, Draft } from "immer"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type IHistoryState = {
  prevValue: number
  operator: string
}[]

const initialState: IHistoryState = []

const clearReducer = {
  clear: (state: IHistoryState) => produce(state, (_: Draft<IHistoryState>) => initialState)
}

export interface IHistoryOpsPayload {
  prevValue: number
  operator: string
}

/**
 * { type: 'history/pushHistory', payload: { prevalue, operation } }
 * 
 * We only keep the last 6 operations.
 */
const pushHistoryReducer = {
  pushHistory: (state: IHistoryState, action: PayloadAction<IHistoryOpsPayload>) => produce(state, (draft: Draft<IHistoryState>) => {
    draft.push(action.payload)
    draft.splice(6, 1)
  })
}

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    ...clearReducer,
    ...pushHistoryReducer
  }
})