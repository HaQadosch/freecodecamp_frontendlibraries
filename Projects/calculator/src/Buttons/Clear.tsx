import React from 'react'
import { useDispatch } from 'react-redux'
import { clear } from "../Store/rootReducer";

export const Clear: React.FC = () => {
  const dispatch = useDispatch()

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