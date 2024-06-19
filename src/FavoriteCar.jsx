import { useState } from "react";

function FavoriteCar(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel };

        setCars(cars => [...cars, newCar]);

        setCarMake("");
        setCarModel("");
        setCarYear(new Date().getFullYear());
    }

    function handleRemoveCar(index){

        cars.filter((_,i) => i !== index);
    }

    function handleYearChange(e){
        setCarYear(e.target.value);
    }

    function handleMakeChange(e){
        setCarMake(e.target.value);
    }

    function handleModelChange(e){
        setCarModel(e.target.value);
    }




    return(
        <>
         <h2>List of Car Objects</h2>

         <ul>
            {cars.map((car, index) => <li onClick={handleRemoveCar} key={index}>{car.year} {car.make} {car.model}</li>)}
         </ul>

         <input type="number" onChange={handleYearChange} value={carYear} id="year" /> <br /> <br />
         <input type="text" onChange={handleMakeChange} value={carMake} placeholder="car make" id="make" /> <br /> <br />
         <input type="text" onChange={handleModelChange} value={carModel} placeholder="car model" id="model" /> <br /> <br />
         <button onClick={handleAddCar}>Add car</button>
        </>
    );
}

export default FavoriteCar