import React, { useState } from 'react';
import "98.css"
import micrsoft from "../../img/micrsoft.png"
import "./microsoftWindow.css"

function MicrosoftWindow() {
    const [openedTab, setOpenedTab] =  useState(true)
    const [tab, setTab] =  useState(true)

  return (
    <div style={ tab ? { width: 450} : {display: "none" }}  className=" microsoft-window window">
    <div className="title-bar">
    <div className="title-bar-text">TETRIS</div>
    <div className="title-bar-controls">
      <button aria-label="Minimize" onClick={()=> (setOpenedTab(!openedTab))}/>
      <button aria-label="Maximize" />
      <button aria-label="Close" onClick={()=> (setTab(!tab))}/>
    </div>
  </div>
  <div style={ openedTab ? { display: ""} : {display: "none"} } className='windows-img-container'> 
  <img src={micrsoft} id='microsoft' />
  </div>
  </div>
  )
}

export default MicrosoftWindow