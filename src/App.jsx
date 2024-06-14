import './styles/App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
import Student from "./Student.jsx";
import UserGreet from './UserGreet.jsx'
import List from './List.jsx'
import ProfilePic from './ProfilePic.jsx' 


function App() {

  const fruits= [{name: "apple", calories: 95},
                {name: "orange", calories: 45},
                {name: "banana", calories: 105},
                {name: "grape", calories: 159}];

  const vegetables= [{name: "onion", calories: 235},
                    {name: "cucumber", calories: 25},
                    {name: "tomato", calories: 65},
                    {name: "potato", calories: 159}];



    return(
      <>
        <Header />
        <Food />
        <UserGreet isLoggedIn={true} username='Nikola' />
        <Student name="SundjerBob" age={30} isStudent={true} />
        <Student name="Patrik" age={40} isStudent={false} />
        <Student/>
        {fruits.lenght > 0 ? <List items={fruits} category="Fruits" /> : null}
        {fruits.lenght > 0 ? <List items={vegetables} category="Vegetables"/> : null}
        <Card />
        <Card />
        <ProfilePic />
        <Button />
        <Footer />
      </>
    );
}

export default App
