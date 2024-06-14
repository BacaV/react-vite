import './styles/Button.css'

function Button(){

    let count = 0;

    const handleClick = (name) => {
        
        if( count< 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        } else {
            console.log(`${name} stop clicking!`)
        }

    };

    return(
        <button className="button" onClick={() => handleClick("Bro")}>Click me!</button>
    );
}

export default Button