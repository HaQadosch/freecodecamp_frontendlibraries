import React, { useState } from 'react';
import { Timer, SessionType } from './Timer/Timer';
import { Session } from './Session/Session';
import { Break } from './Break/Break';
import { Beep } from './Beep/Beep';

const _5minutes = 5 * 60
const _25minutes = 25 * 60

export const App: React.FC = () => {
  const [sessionDuration, setSessionDuration] = useState(_25minutes)
  const [breakDuration, setBreakDuration] = useState(_5minutes)

  return (
    <article className="app">
      <h1>Clock</h1>
      <Timer timeLeft={ _25minutes } sessionType={ SessionType.Session } reset={ reset } />
      <Session sessionDuration={ sessionDuration } setSessionDuration={ setSessionDuration } />
      <Break breakDuration={ breakDuration } setBreakDuration={ setBreakDuration } />
      <Beep />
    </article>
  )

  function reset () {
    setSessionDuration(_25minutes)
    setBreakDuration(_5minutes)
  }
}

