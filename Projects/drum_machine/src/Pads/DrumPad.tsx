import React from 'react'

interface IDrumPad {
  padId: {
    letter: string,
    source: string,
    display: string
  }
  action: React.Dispatch<React.SetStateAction<string>>
  audio: (src: string) => () => void
}

export const DrumPad: React.FC<IDrumPad> = ({ padId: { letter, source, display }, action, audio }) => {

  return (
    <li>
      <button
        className="drum-pad"
        id={ `pad_${ letter }` }
        onClick={ handleClick }>{ letter }</button>
    </li>
  )

  function handleClick (_: React.MouseEvent<HTMLButtonElement>) {
    console.log({ letter, source, display })
    action(display)
    audio(source)()
  }
}
