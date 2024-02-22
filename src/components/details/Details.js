import React from 'react'
import "./Details.css"

function Details() {
  return (<div>
    <div className='title'> TETRIS</div>
    <div className='details--container'>
      <p id='howtoplay'> How to Play</p>
      <div className='directions'>
        <p> • <span>Left and right arrows</span> to move side to side.</p>
        <p> • <span>Up arrow</span> to rotate tetromino.</p>
        <p> • <span>Down arrow</span> to drop faster.</p>
        <p> • <span>Spacebar</span> to restart the game.</p>
      </div>
    </div>
    </div>
  )
}

export default Details