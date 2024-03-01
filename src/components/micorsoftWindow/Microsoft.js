import React, { useState } from 'react';
import "98.css"
import micrsoft from "../../img/micrsoft.png"
import "./microsoftWindow.css"

function MicrosoftWindow({windowsTab, setWindowsTab, setWindowsMinTab, windowsMinTab, activeWindow, setActiveWindow}) {
  
  return (
    <>
    {windowsTab ? 
      <div style={ (windowsTab ? { width: 450} : {display: "none" }, 
      activeWindow === "windows98" ? { zIndex: 100} : { zIndex: 1})} 
       className=" microsoft-window window"
       onClick={()=> (setActiveWindow("windows98"))}>
      <div className="title-bar">
      <div className="title-bar-text">TETRIS</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize" onClick={()=> (setWindowsMinTab(!windowsMinTab))}/>
        <button aria-label="Maximize" />
        <button aria-label="Close" onClick={()=> (setWindowsTab(!windowsTab))}/>
      </div>
    </div>
    <div style={ windowsMinTab ? { display: ""} : {display: "none"} } className='windows-img-container'> 
    <img src={micrsoft} id='microsoft' />
    </div>
    </div> :
  ""}</>
    
  )
}

export default MicrosoftWindow