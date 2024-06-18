import {useState} from "react";

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    let updateName = () => {
        setName("Marko");
    }

    let incrementAge = () => {
        setAge(a => a + 1);
    }

    let decrementAge = () => {
        setAge(a => a - 1)
    }

    let employmentStatus = () => {
           setIsEmployed(!isEmployed);
    }



    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set name</button>
        <br /><br />
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment age</button>
            <button onClick={decrementAge}>Decrement age</button>
            <br /><br />
            <p>Employment status: {isEmployed ? "Employed" : "Unemployed"}</p>
            <button onClick={employmentStatus}>Employment Status change</button>
        </div>
    )
}

export default MyComponent;