import React from 'react'

interface IDrumPad {
  padId: {
    letter: string,
    source: string,
    display: string
  }
  action: React.Dispatch<React.SetStateAction<string>>
}

export const DrumPad: React.FC<IDrumPad> = ({ padId: { letter, source, display }, action }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log({ letter, source, display })
    action(letter)
    audio(source)()
  }
  return (
    <li>
      <button
        className="drum-pad"
        id={ `pad_${ letter }` }
        onClick={ handleClick }>{ letter }</button>
    </li>
  )
}

function audio (src: string) {
  const audioElt = new window.Audio(src)
  return function play_ () {
    audioElt.play()
  }
}
