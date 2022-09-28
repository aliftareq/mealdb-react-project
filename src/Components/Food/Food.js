import React from 'react';
import './Food.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Food = (props) => {
    const { food, handleClick } = props;
    const { strMeal, strCategory, strMealThumb } = food
    return (
        <div className='food'>
            <img src={strMealThumb} alt="" />
            <div>
                <h5>Name: {strMeal}</h5>
                <p>Catagory : {strCategory}</p>
            </div>
            <button onClick={() => handleClick(strMeal)}>
                Add to Cart
                <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Food;