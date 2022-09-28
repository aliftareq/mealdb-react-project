import React, { useEffect, useState } from 'react';
import './Resturent.css'
import Cart from '../Cart/Cart';
import Food from '../Food/Food';

const Resturent = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setFoods(data.meals))
    }, [])
    console.log(foods)

    const addToCart = (id) => {
        console.log('add to cart clicked', id)
        const productList = document.getElementById('selected-products')
        const item = document.createElement('li')
        const food = foods.find(food => food.strMeal === id)
        console.log(food)
        item.innerText = food.strMeal
        productList.append(item)
    }
    return (
        <div className='resturent'>
            <div className='foods'>
                {
                    foods.map(food => <Food
                        key={food.idMeal}
                        food={food}
                        handleClick={addToCart}
                    ></Food>)
                }
            </div>
            <div className='cart'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Resturent;