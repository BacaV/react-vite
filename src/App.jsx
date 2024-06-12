import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import './styles/App.css'
import Button from './Button.jsx'
import Student from "./Student.jsx";
import UserGreet from './UserGreet.jsx'

function App() {


    return(
      <>
        <Header />
        <Food />
        <UserGreet isLoggedIn={true} username='Nikola' />
        <Student name="SundjerBob" age={30} isStudent={true} />
        <Student name="Patrik" age={40} isStudent={false} />
        <Student/>
        <Card />
        <Card />
        <Button />
        <Footer />
      </>
    );
}

export default App
