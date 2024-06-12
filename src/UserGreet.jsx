import propTypes from 'prop-types';
import './styles/UserGreet.css'

function UserGreet(props){

    const welcomeMessage = <h3 className='welcome-msg'>
                            Welcome, {props.username}
                            </h3>
        
    const loginPrompt = <h3 className='login-msg'>
                        You are not logged in!
                        </h3>
    

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
    
}

UserGreet.proptypes = {
    isLoggedIn: propTypes.bool,
    username: propTypes.string
}

UserGreet.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}

export default UserGreet