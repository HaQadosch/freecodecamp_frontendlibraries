import React from 'react'

interface IDrumPad {
  padId: string
}

export const DrumPad: React.FC<IDrumPad> = ({ padId }) => {
  return (
    <li>
      <button className="drum-pad" id={ `pad_${ padId }` }>{ padId }</button>
    </li>
  )
}
