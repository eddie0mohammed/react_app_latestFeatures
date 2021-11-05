import React from 'react'

import classes from './CartButton.module.css';
import CartIcon from '../../assets/CartIcon';

export const CartButton = (props) => {
    return (
         <button type="button" className={classes.button}
            onClick={props.showCart}
            >
             <span className={classes.icon}>
                <CartIcon />
             </span>
             <span>Your Cart</span>
             <span className={classes.badge}>3</span>
         </button>
    )
}
