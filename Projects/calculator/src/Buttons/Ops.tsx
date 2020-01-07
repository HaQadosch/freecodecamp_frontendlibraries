import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  RootState,
  pushHistory, replaceHistory,
  setTotal,
  setTemp,
  setState
} from "../Store/rootReducer"
import { AppDispatch } from "../Store/store"
import { Status } from "../Store/Slices/statusSlice";
import { operate } from "../Utils/ops";

interface IOperatorButton {
  operator: string
  id: string
}

const OperatorButton: React.FC<IOperatorButton> = ({ id, operator }) => {
  const dispatch: AppDispatch = useDispatch()
  const history = useSelector(({ history }: RootState) => history)
  const { value: total } = useSelector(({ total }: RootState) => total)
  const { state: status } = useSelector(({ status }: RootState) => status)

  return (
    <button id={ id } onClick={ handleClick }>
      { operator }
    </button>
  )

  function handleClick (_: React.MouseEvent<HTMLButtonElement>): void {
    switch (status) {
      case Status.FollowUpInput: // First time pushing for operator.
        dispatch(pushHistory({
          prevValue: total,
          operator
        }))
        const temp = history.concat([{ prevValue: total, operator }]).reduce((accHistory, curHistory) => {
          return { prevValue: operate(accHistory.operator)(accHistory.prevValue, curHistory.prevValue), operator: curHistory.operator }
        }, { prevValue: 0, operator: '+' })
        dispatch(setTemp({ tempValue: temp.prevValue }))
        dispatch(setTotal({ value: 0 }))
        dispatch(setState({ state: Status.OperatorInput }))
        break
      case Status.OperatorInput: // Second time pushing for operator, this is to replace the previous one.
        dispatch(replaceHistory({
          operator
        }))
        break
      case Status.TotalInput:
      case Status.FirstInput:
      default:
      // Do nothing. 
    }
  }
}

export const OpAdd: React.FC = () => <OperatorButton id="add" operator="+" />
export const OpSubstract: React.FC = () => <OperatorButton id="substract" operator="-" />
export const OpMultiply: React.FC = () => <OperatorButton id="multiply" operator="*" />
export const OpDivide: React.FC = () => <OperatorButton id="divide" operator="/" />
