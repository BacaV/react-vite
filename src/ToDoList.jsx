import { useState } from "react";

function ToDoList(){

    return( 
        <>
        <h2>To do list</h2>
        <InputElement />
        </>
        

    );
}

function InputElement(){

    const [itemList, setItemList] = useState([]);
    const [item, setItem] = useState("");

    function handleListChange(e){
        setItem(e.target.value);
    }

    function handleListAdd(){
        setItemList(item);
    }

    return(
        <>
        <div>
            <input type="text" value={item} id="listInput" onChange={handleListChange} placeholder="Enter list item" />
            <button onClick={handleListAdd}></button>
        </div>
        <ItemElement value={itemList[0]} />
        </>
    )
}

function ItemElement(props){

    const itemValue = props.value;

    return(
        <>
        <div>
            <p>{itemValue}</p>
            <button>^</button>
            <button></button>
        </div>
        </>
    )
}


export default ToDoList;