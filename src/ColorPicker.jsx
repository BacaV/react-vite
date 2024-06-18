import { useState } from "react";


function ColorPicker(){

    const [color, setColor] = useState("#ffffff");

    function handleColorChange(e){
        setColor(e.target.value)
    }

    


    return(
        <>
            <div style={{backgroundColor: color, width: '100px'}}>
                <p>{color}</p>
            </div>
            <input type="color" value={color} onChange={handleColorChange}/>
        </>
    )
}

export default ColorPicker;