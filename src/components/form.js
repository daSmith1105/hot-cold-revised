import React from 'react';
import './form.css';

export default function Form (props) {

        return ( 
            <form onSubmit={props.handleSubmit}>
                <input className="guess-input" type="number" min="1" max="100" autoComplete="off" onChange={props.handleChange} value={props.inputVal} />  
                <input className="submit-btn" type = "submit" value = "guess!"/>
            </form>
        )
    }
