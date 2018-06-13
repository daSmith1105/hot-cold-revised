import React from 'react';
import './howTo.css';

export default function HowTo (props) {

  return (
          <div className="container">
            <h1 className="heading">How to Play</h1>
            <p className="description">Welcome to the Hot or Cold number guessing game. This is how to play.</p>
            <ol>
              <li>The computer has chosen a secret number between 1 and 100. It is your job to figure out this number.</li>
              <li>You need to continue guessing until you find the secret number.</li>
              <li>You will get feedback on how close ("hot") or far away ("cold") your guess is from the secret number.</li>
            </ol>
            <p className="ready">Ready to play?</p>
            <button className="return" onClick={props.helpClick}>Back to the Game</button>
          </div>
  )
}
