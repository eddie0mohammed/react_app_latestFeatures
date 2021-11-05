import React from 'react';

import {input} from './CustomInput.module.css';

 const CustomInput = (props) => {
    return (
        <div className={input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>
        </div>
    )
}

export default CustomInput;