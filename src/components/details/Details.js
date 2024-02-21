import React from 'react'
import "./Details.css"

function Details() {
  return (
    <div className='details--container'>
      <div className='title'> TETRIS</div>
      <p> How to Play</p>
      <ul className='directions'>
        <li> Left and right arrows to move side to side.</li>
        <li> Up arrow to rotate tetromino.</li>
        <li> Down arrow to move down faster.</li>
        <li> Spacebar to restart the game.</li>
      </ul>
    </div>
  )
}

export default Details