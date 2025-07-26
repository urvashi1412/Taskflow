import React, { useState, useEffect } from 'react';

const Pomodoro = ({ setCurrentPage }) => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds > 0) setSeconds(seconds - 1);
        else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
          alert("Time's up! Take a break 🌿");
          setIsRunning(false);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [minutes, seconds, isRunning]);

  const resetTimer = () => {
    setMinutes(25);
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div className="min-h-screen bg-emerald-50 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-emerald-800 mb-6">⏳ Pomodoro Timer</h1>
      <div className="text-6xl font-mono text-emerald-700 mb-6">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-4 mb-6">
        <button onClick={() => setIsRunning(true)} className="bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg">Start</button>
        <button onClick={() => setIsRunning(false)} className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg">Pause</button>
        <button onClick={resetTimer} className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg">Reset</button>
      </div>
      <button onClick={() => setCurrentPage('study')} className="text-sm text-emerald-600 underline">← Back to Study Techniques</button>
    </div>
  );
};

export default Pomodoro;
