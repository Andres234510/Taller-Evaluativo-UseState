import { useState } from 'react'

export const Cronometrer = () => {
  // 4. Timer
  const [seconds, setSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerInterval, setTimerInterval] = useState(null);

  const startTimer = () => {
    if (!isTimerRunning) {
      const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      setTimerInterval(interval);
      setIsTimerRunning(true);
    }
  };
  
  const stopTimer = () => {
    if (isTimerRunning && timerInterval) {
      clearInterval(timerInterval);
      setSeconds(0);
      setIsTimerRunning(false);
    }
  };
  return (
    <div >
        <h2 className="text-xl font-bold mb-4">Timer</h2>
        <div className="text-center text-4xl font-bold mb-4">
          {seconds} seconds
        </div>
        <div className="flex justify-between">
          <button onClick={startTimer} disabled={isTimerRunning} className={`px-4 py-2 rounded-md ${isTimerRunning ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 text-white hover:bg-green-600'}`}>
            Start
          </button>
          <button onClick={stopTimer} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Stop
          </button>
        </div>
      </div>
  )
}