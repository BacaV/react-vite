import { useState, useRef } from "react";


function StopwatchApp(){

    const [isRunning, setIsRunning] = useState(false);
    const [start, setStart] = useState(null);
    const [elapsed, setElapsed] = useState(null);
    const timeRef = useRef(null);


    function handleStart(){
        if(isRunning !== true && elapsed !== null && start !== null){

            setStart(Date.now() - (elapsed - start));

            timeRef.current = setInterval(() => {
                setElapsed(Date.now());
            }, 10);
        }
        else if(isRunning !== true){
            setIsRunning(true);
            setStart(Date.now());
            setElapsed(Date.now());

            timeRef.current = setInterval(() => {
                setElapsed(Date.now())
            }, 10);
        } else {
            return;
        }
        
    }

    function handleStop(){

        clearInterval(timeRef.current);
        setIsRunning(false);
    }

    function handleReset(){

            clearInterval(timeRef.current)
            setIsRunning(false);
            setElapsed(null);
            setStart(null);  
    }

    function formatTime(){

        let elapsedTime = elapsed - start;

        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milli = Math.floor((elapsedTime % 1000) /10);

        return `${minutes}:${seconds}:${milli}`;
    }

    return(
        <>
        <p>Time elapsed: {formatTime()}</p>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </>
    );
}

export default StopwatchApp;