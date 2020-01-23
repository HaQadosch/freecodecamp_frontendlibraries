import React, { useState } from 'react';
import { Timer } from './Timer/Timer';
import { Session } from './Session/Session';
import { Break } from './Break/Break';
import { Beep } from './Beep/Beep';

export const App: React.FC = () => {
  const [play, setPlay] = useState(false)
  const [forceStop] = useState(false)

  return (
    <article className="app">
      <h1>Clock</h1>
      <Timer />
      <Session />
      <Break />
      <Beep play={play} setPlay={setPlay} forceStop={forceStop} />
    </article>
  )
}
