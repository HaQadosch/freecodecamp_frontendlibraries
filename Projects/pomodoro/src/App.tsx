import React, { useState } from 'react';
import { Timer } from './Timer/Timer';
import { Session } from './Session/Session';
import { Break } from './Break/Break';
import { Beep } from './Beep/Beep';

const _5minutes = 5 * 60
const _25minutes = 25 * 60

export const App: React.FC = () => {
  const [sessionDuration, setSessionDuration] = useState(_25minutes)
  const [breakDuration, setBreakDuration] = useState(_5minutes)
  const [running, setRunning] = useState(false)
  const [play, setPlay] = useState(false)
  const [forceStop, setForceStop] = useState(false)


  return (
    <article className="app">
      <h1>Clock</h1>
      <Timer breakDuration={breakDuration} sessionDuration={sessionDuration} reset={reset} setPlay={setPlay} />
      <Session sessionDuration={sessionDuration} setSessionDuration={setSessionDuration} running={running} />
      <Break breakDuration={breakDuration} setBreakDuration={setBreakDuration} running={running} />
      <Beep play={play} setPlay={setPlay} forceStop={forceStop} />
    </article>
  )

  function reset() {
    setRunning(false)
    setPlay(false)
    setSessionDuration(_25minutes)
    setBreakDuration(_5minutes)
    setForceStop(forceStop => !forceStop)
  }
}
