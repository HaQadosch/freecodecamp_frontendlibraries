import React from 'react'

interface IDrumPad {
  padId: {
    letter: string,
    source: string,
    display: string
  }
  action: React.Dispatch<React.SetStateAction<string>>
  audio: (src: string) => () => void
  isKeyPressed: boolean
}

export const DrumPad: React.FC<IDrumPad> = ({ padId: { letter, source, display }, action, audio, isKeyPressed }) => {

  return (
    <li>
      <button
        className={ `drum-pad${ isKeyPressed ? ' focused' : ' ' }` }
        id={ `pad_${ letter }` }
        onClick={ handleClick }>{ letter }</button>
    </li >
  )

  function handleClick (_: React.MouseEvent<HTMLButtonElement>) {
    console.log({ letter, source, display })
    action(display)
    audio(source)()
  }
}
