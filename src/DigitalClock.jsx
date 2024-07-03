import { useState } from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    function formatTime(){
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time. getSeconds();

        return `${hours}:${minutes}:${seconds}`
    }


    return(
        <>
        <p id="para">Time: {formatTime()}</p>
        </>
    )
}

export default DigitalClock;