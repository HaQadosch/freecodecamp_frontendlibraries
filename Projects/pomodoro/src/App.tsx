import React, { useState, useEffect } from 'react';
import { Timer, SessionType } from './Timer/Timer';
import { Session } from './Session/Session';
import { Break } from './Break/Break';
import { Beep } from './Beep/Beep';

const _5minutes = 5 * 60
const _25minutes = 25 * 60

export const App: React.FC = () => {
  const [sessionDuration, setSessionDuration] = useState(_25minutes)
  const [breakDuration, setBreakDuration] = useState(_5minutes)
  const [running, setRunning] = useState(false)
  const [session, setSession] = useState(SessionType.Session)
  const [timeLeft, setTimeLeft] = useState(session === SessionType.Session ? sessionDuration : breakDuration)
  const [play, setPlay] = useState(false)
  const [forceStop, setForceStop] = useState(false)

  useEffect(() => {
    const intervalId = running
      ? setInterval(() => { setTimeLeft(time => time - 1) }, 1000)
      : 0
    return () => {
      clearInterval(intervalId as NodeJS.Timeout)
    }
  }, [running])

  useEffect(() => {
    if (timeLeft <= 0) {
      setPlay(true)
      setSession(session => session === SessionType.Session ? SessionType.Break : SessionType.Session)
    }
  }, [timeLeft])

  useEffect(() => {
    setTimeLeft(session === SessionType.Session ? sessionDuration : breakDuration)
    // eslint-disable-next-line
  }, [session])

  useEffect(() => {
    if (!running && session === SessionType.Session) {
      setTimeLeft(sessionDuration)
    }
    // eslint-disable-next-line
  }, [sessionDuration])

  useEffect(() => {
    if (!running && session === SessionType.Break) {
      setTimeLeft(breakDuration)
    }
    // eslint-disable-next-line
  }, [breakDuration])

  return (
    <article className="app">
      <h1>Clock</h1>
      <Timer running={ running } setRunning={ setRunning } timeLeft={ timeLeft } sessionType={ session } reset={ reset } />
      <Session sessionDuration={ sessionDuration } setSessionDuration={ setSessionDuration } />
      <Break breakDuration={ breakDuration } setBreakDuration={ setBreakDuration } />
      <Beep play={ play } setPlay={ setPlay } forceStop={ forceStop } />
    </article>
  )

  function reset () {
    setSessionDuration(_25minutes)
    setBreakDuration(_5minutes)
    setSession(SessionType.Session)
    setRunning(false)
    setTimeLeft(sessionDuration)
    setPlay(false)
    setForceStop(forceStop => !forceStop)
  }
}

