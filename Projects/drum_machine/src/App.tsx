import React, { useState } from 'react';
import './App.css';

import { Display } from './Display/Display';
import { Pads } from "./Pads/Pads";

export const App: React.FC = () => {
  const [displayText, setDisplayText] = useState('Press the letters or Click to play')

  return (
    <React.StrictMode>
      <main className="App" id="drum-machine" onKeyDown={ handleKey } tabIndex={ 0 } >
        <Display text={ displayText } />
        <Pads action={ setDisplayText } />
      </main>
    </React.StrictMode >
  )

  function handleKey ({ charCode, key, keyCode }: React.KeyboardEvent) {
    console.log({ charCode, key, keyCode })
  }
}
