import { useState } from "react";

function FavoriteCar(){

    const [car, setCar] = useState({year: 2024, make: "Audi", model: "Rs7"});


    function handleYear(e){
        setCar(c => ({...c, year: e.target.value}))
    }

    function handleMake(e){
        setCar(c => ({...c, make: e.target.value}))
    }

    function handleModel(e){
        setCar(c => ({...c, model: e.target.value}))
    }

    return(
        <>
        <div>
            Year: <input type="number" value={car.year} onChange={handleYear} /> <br /><br />
            Make: <input type="text" value={car.make} onChange={handleMake} /> <br /><br />
            Model: <input type="text" value={car.model} onChange={handleModel} /> <br /><br />

            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        </div>

        </>
    )

}

export default FavoriteCar