import { useRef } from "react";

function UseRef(){

    const inputRef = useRef(null);



    function handleClick(){
       inputRef.current.focus();
       console.log(inputRef.current);
    }

    return(
        <>
        <button onClick={handleClick}>Press!</button>    
        <input type="text" ref={inputRef} />
        </>
    );
}

export default UseRef;