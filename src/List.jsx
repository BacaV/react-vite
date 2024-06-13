import PropTypes from 'prop-types'
import './styles/List.css'

function List(props){

    const category= props.category;
   const itemList= props.items;

        itemList.sort((a,b) => a.name.localeCompare(b.name));

        //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);



    const listItems = itemList.map((item, index) => <li key={index}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b>
                                                    {console.log(index)}
                                                    </li>)


    
    return(
        <>
            <h3>
                {category}
            </h3>
            <ul>
                {listItems}
            </ul>
    </>
    );
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string, calories: PropTypes.number})),
    category: PropTypes.string
}


export default List