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

    function handleListAdd(){
        const newItem = document.getElementById("listInput").value;
        document.getElementById("listInput").value = "";

        console.log(newItem)

        setItemList(i =>[...i, newItem]);
    }

    return(
        <>
        <div>
            <input type="text" id="listInput" placeholder="Enter list item" />
            <button onClick={handleListAdd}>Add</button>
        </div>

       
            {itemList.forEach(item => {
                <ItemElement value={item} />
                console.log("asas")
            })}
        </>
    )
}

function ItemElement(props){

    const value = props.value;

    return(
        <>
        <div>
            <p>{value}</p>
            <button>Delete</button>
            <button>Up</button>
            <button>Down</button>
        </div>
        </>
    )
}


export default ToDoList;