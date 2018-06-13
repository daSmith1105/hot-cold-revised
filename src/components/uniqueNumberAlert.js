import React from 'react';
import './uniqueNumberAlert.css';

export default function UniqueNumberAlert (props) {

    return (
         <div className="modal">
            <div className="message">
                <p>Number {props.value} already guessed or invalid, please try another number</p>
                <button className="close-modal" onClick={props.closeModal}>
                    Back to Game
                </button>
            </div>
         </div>
    )
}