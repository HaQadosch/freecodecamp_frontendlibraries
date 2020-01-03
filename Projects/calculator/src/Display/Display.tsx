import React from 'react'
import './display.css'

import { useSelector } from "react-redux";
import { RootState } from "../Store/rootReducer";

export const Display: React.FC = () => {
  const { value: total } = useSelector(
    (state: RootState) => state.total
  )

  return (
    <section id="display">
      <section id="history">
        <ul>
          <li>456</li>
          <li>*</li>
          <li>13 </li>
        </ul>
      </section>
      <section id="sum">
        <p>{ total }</p>
      </section>
    </section>
  )
}
