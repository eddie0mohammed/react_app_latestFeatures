import React from 'react'

import DUMMY_MEALS from './data';
import classes from '../../assets/css/AvailableMeals.module.css';

import Card from '../../components/Card/Card';
import MealItem from './MealItem';

const AvailableMeals = (props) => {
    return (
        <section className={classes.meals}>
            <Card >
                <ul>
                    {DUMMY_MEALS.map((meal) => (
                        <MealItem 
                            key={meal.id}
                            desc={meal?.description}
                            itemPrice={meal.price}
                            name={meal.name}
                            id={meal.id}
                        />
                    ))}
                </ul>
            </Card>
            
        </section>
    )
}

export default AvailableMeals;