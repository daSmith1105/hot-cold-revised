import React from 'react';
import './header.css'

export default function Header(props) {

    return ( 
      <div className = "header" >
        <button className = "how-to header-btn" onClick = { props.helpClick } >
        How to play 
        </button> 
        <button className = "new-game header-btn" onClick = { props.restartClick } >
        +New Game 
        </button> 
      </div>
    )
}