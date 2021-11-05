import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import { CartButton } from '../CartButton/CartButton';
import classes from './header.module.css';

export const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <CartButton showCart={props.showCart}/>
            </header>
            
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food" />
            </div>
        </>
    )
}
