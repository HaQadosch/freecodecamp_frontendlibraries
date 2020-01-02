import React from 'react'
import './display.css'

interface IDisplay {
  text: string
}

export const Display: React.FC<IDisplay> = ({ text }) => {
  return (
    <section id="display">
      { text }
    </section>
  )
}
