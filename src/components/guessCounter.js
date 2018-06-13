import React from 'react';
import './guessCounter.css';

export default function GuessCount (props) {

    let count = props.currentCount.length;

return (
    count === 0 ?
        <h2 className="counter-text">Make a guess!</h2> : 
        <h2 className="counter-text">Guess#  <span className="count">{count}</span>!</h2>
    ) 
}