import './styles/App.css'
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from "./Student.jsx";
import UserGreet from './UserGreet.jsx';
import List from './List.jsx';
import ProfilePic from './ProfilePic.jsx' ;
import MyComponent from './MyComponent.jsx';
import OnChange from './OnChange.jsx';
import ColorPicker from './ColorPicker.jsx';
import FavoriteCar from './FavoriteCar.jsx';
import UseEffect from './UseEffect.jsx';
import ComponentA from './ComponentA.jsx';
import UseRef from './UseRef.jsx';



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
        <UseRef/>
        <ComponentA/>
        <UseEffect/>
        <MyComponent/>
        <OnChange />
        <Food />
        <UserGreet isLoggedIn={true} username='Nikola' />
        <ColorPicker />
        <FavoriteCar/>
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
