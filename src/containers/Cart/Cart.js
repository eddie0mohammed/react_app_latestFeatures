import React from 'react'

import classes from '../../assets/css/Cart.module.css';
import Modal from '../../components/Modal/Modal';

const Cart = (props) => {

    const cartItems = [
        {id: 'c1', name: 'Sushi', amount: 2, price: 12.99}
    ]
    return (
        <Modal 
            onClick={props.close}
        >
            <ul className={classes['cart-items']}>
            {cartItems.map((item) => {
                return (
                    <li key={item.id}>{item.name}</li>
                )
            })}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$35.65</span>   
            </div>
            
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                    onClick={props.close}
                >Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;