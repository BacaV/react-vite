import { useState } from "react";

function ToDoList(){

    const [ list, setList] = useState(["Default", "Values"]);
    const [ item, setItem ] = useState("");

    function handleAdd(){
        setList([...list, item]);
        setItem("");
    }

    function handleRemove(i){

    }

    function handleUp(i){

    }

    function handleDown(i){

    }

    function handleChange(e){
        setItem(e.target.value)
    }

    return(
        <>
            <h2>To Do List</h2>

            <input type="text" id="input" value={item} onChange={handleChange} />
            <button className="add-btn" onClick={handleAdd}>Add</button>

            <ul>
                {
                    list.map((task, index) => 
                        <li key={index}>
                            <span className="task-text">{task}</span>
                            <button className="delete-btn" onClick={handleRemove}>Delete</button>
                            <div className="up-down-wrapper">
                                <button className="up-btn" onClick={handleUp}>Up</button>
                                <button className="down-btn" onClick={handleDown}>Down</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default ToDoList;