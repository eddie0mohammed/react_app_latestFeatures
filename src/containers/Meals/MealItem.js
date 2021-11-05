import React from 'react'

import classes from '../../assets/css/MealItem.module.css';
import MealItemForm from './MealItemForm';

 const MealItem = ({name, desc, itemPrice, id}) => {
     const {meal, description, price} = classes;
    return (
        <li className={meal}>
            <div>
                <h3>{name}</h3>
                <div className={description}>{desc}</div>
                <div className={price}>{`$${itemPrice.toFixed(2)}`}</div>
            </div>

            <div>
                <MealItemForm id={id}/>
            </div>
        </li>
    )
}
export default MealItem;