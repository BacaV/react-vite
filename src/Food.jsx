import { useState } from "react";

function Food(){

    const [foods, setFoods] = useState(['Orange','Banana','Apple'])

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index));
    }



    return(
        <>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => <li onClick={() => handleRemoveFood(index)} key={index}>{food}</li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food"/>
        <button onClick={handleAddFood}>Add food</button>
        </>
    );

}

export default Food;