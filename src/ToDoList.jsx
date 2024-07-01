import { useState } from "react";
import './styles/ToDoList.css'

function ToDoList(){

    const [ list, setList] = useState(["Default", "Values"]);
    const [ item, setItem ] = useState("");

    function handleAdd(){
        setList([...list, item]);
        setItem("");
    }

    function handleRemove(index){
        setList(list => list.filter((_,i) => i !== index));
    }

    function handleUp(index){
        if(index == 0){
            return;
        } else {

            let newList = [...list];

            let tempVar = newList[index];
            newList[index] = newList[index-1];
            newList[index-1] = tempVar;
            
            setList(newList);
        }
    }

    function handleDown(index){

        if(index == (list.length - 1)){
            return;
        } else {

            let newList = [...list];

            let b = newList[index];
            newList[index] = newList[index+1];
            newList[index+1] = b;
            
            setList(newList);
        }

    }

    function handleChange(e){
        setItem(e.target.value)
    }

    return(
        <>
        <div className="wrapper">
            <h2>To Do List</h2>
            <div className="input-wrapper">
                <input type="text" id="input" value={item} onChange={handleChange} />
                <button className="add-btn" onClick={handleAdd}>Add</button>
            </div>
            <ul>
                {
                    list.map((task, index) => 
                        <li key={index}>
                            <span className="task-text">{task}</span>
                            <button className="delete-btn" onClick={() => handleRemove(index)}>Delete</button>
                            <div className="up-down-wrapper">
                                <button className="up-btn" onClick={() => handleUp(index)}>Up</button>
                                <button className="down-btn" onClick={() => handleDown(index)}>Down</button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
        </>
    )
}

export default ToDoList;