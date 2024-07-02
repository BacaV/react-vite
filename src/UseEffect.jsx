import { useState, useEffect } from "react";

function UseEffect(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count, color])

    function addCount(){
        setCount(c => c + 1);
    }

    function reduceCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(color === "green" ? "red" : "green");
    }

    return(
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={reduceCount}>Reduce</button>
            <button onClick={changeColor}>Change color</button>
        </>
    )

}

export default UseEffect;