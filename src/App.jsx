import {useRef, useState} from 'react'
import './App.css'
import Header from './components/Header';
import Buttons from "./components/Buttons.jsx";

function timeToString(time) {
    let hour = Math.floor(time / 3600000);
    let minute = Math.floor((time / 60000) % 60);
    let second = Math.floor((time / 1000) % 60);

    let hourString = hour.toString().padStart(2, "0");
    let minuteString = minute.toString().padStart(2, "0");
    let secondString = second.toString().padStart(2, "0");
    console.log(hourString, minuteString, secondString);

    return `${hourString}:${minuteString}:${secondString}`;
}

function App() {
    const [time, setTime] = useState("00:00:00");
    const [isRunning, setIsRunning] = useState(false);

    const startTimeRef = useRef(0);
    const elapsedTimeRef = useRef(0);
    const timerIntervalRef = useRef(null);

    const handleStart = () => {
        if (isRunning) return;
        setIsRunning(true);

        startTimeRef.current = Date.now() - elapsedTimeRef.current;
        timerIntervalRef.current = setInterval(() => {
            elapsedTimeRef.current = Date.now() - startTimeRef.current;
            setTime(timeToString(elapsedTimeRef.current));
        }, 10);
        console.log('start')
    };

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(timerIntervalRef.current);
        console.log('stop')
    }

    const handleReset = () => {
        clearInterval(timerIntervalRef.current);
        setIsRunning(false);
        setTime("00:00:00");
        elapsedTimeRef.current = 0;
    }

    return (
        <div className="App">
            <Header />
            <time id="clock-display">{time}</time>
            <Buttons
            onStart={handleStart}
            onStop={handleStop}
            onReset={handleReset}
            />
        </div>
    )
}

export default App
