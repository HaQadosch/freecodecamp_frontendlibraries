import React from 'react'

import { useDispatch } from 'react-redux'
import { clear } from "../Store/rootReducer"
import { AppDispatch } from "../Store/store";

export const Clear: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <button id="clear" onClick={ handleClick }>
      AC
    </button>
  )

  function handleClick () {
    dispatch(clear())
  }
}

/**
 * {type: 'total/setTotal', payload: { value: 1954 }}
 */