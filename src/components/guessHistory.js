import React from 'react';
import './guessHistory';

export default function GuessHistory (props) {

    return (
        <div className="guess-history">
            {props.array.join(' ')}
        </div>
    )
}