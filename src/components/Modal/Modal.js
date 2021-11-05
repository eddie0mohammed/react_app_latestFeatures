import React from 'react';
import ReactDOM from 'react-dom';

import {backdrop, modal, content} from '../../assets/css/Modal.module.css';


const Backdrop = (props) => {
    return (
        <div className={backdrop} onClick={props.onClick}></div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={modal}>
            <div className={content}>
                {props.children}
            </div>
        </div>
    )
}

const Modal = (props) => {
    return (
        // <>
        //     <Backdrop />
        //     <ModalOverlay>{props.children}</ModalOverlay>
            
        // </>
        
        // using portals 
        <>
        {
        ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}/>, 
        document.getElementById('overlays'))
        }

        {
        ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, 
        document.getElementById('overlays'))
        }
        </>

    )
}
export default Modal;