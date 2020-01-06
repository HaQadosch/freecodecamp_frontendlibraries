import React from 'react'
import './display.css'

import { useSelector } from "react-redux";
import { RootState } from "../Store/rootReducer";

export const Display: React.FC = () => {
  const { value: total } = useSelector(({ total }: RootState) => total)
  const history = useSelector(({ history }: RootState) => history)

  return (
    <section id="display_history">
      <section id="history">
        <ul>
          {
            history.map(({ prevValue, operator }, index) => (
              <React.Fragment key={ index }>
                <li>{ prevValue }</li><li>{ operator }</li>
              </React.Fragment>
            ))
          }
        </ul>
      </section>
      <section id="display">
        <p>{ total }</p>
      </section>
    </section >
  )
}
