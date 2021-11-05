import React from 'react'
import CustomInput from '../../components/CustomInput/CustomInput';

import {form} from '../../assets/css/MealItemForm.module.css';

 const MealItemForm = (props) => {
    return (
        <form className={form}>

            <CustomInput 
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: "1",
                    max: '5',
                    defaultValue:'1'
                }}
            />

            <button>+ Add</button>
            
        </form>
    )
}

export default MealItemForm