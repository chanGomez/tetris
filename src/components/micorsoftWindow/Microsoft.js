import React, { useState } from 'react';
import "98.css"
import micrsoft from "../../img/micrsoft.png"
import "./microsoftWindow.css"
import Draggable from 'react-draggable';


function MicrosoftWindow({windowsTab, setWindowsTab, setWindowsMinTab, windowsMinTab, activeWindow, setActiveWindow}) {
  
  return (
    <Draggable>
    <div 
      id='windowsTab'
      style={ (windowsTab ? { width: 450} : {display: "none" }
      )} 
       className={activeWindow === "windows98" ? "microsoft-window window active" : "microsoft-window window" }
       onClick={()=> (setActiveWindow("windows98"))}>
      <div className="title-bar">
      <div className="title-bar-text">Windows 98</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize" onClick={()=> (setWindowsMinTab(!windowsMinTab))}/>
        <button aria-label="Maximize" />
        <button aria-label="Close" onClick={()=> (setWindowsTab(!windowsTab))}/>
      </div>
      </div>
    <div style={ windowsMinTab ? { display: ""} : {display: "none"} } className='windows-img-container'> 
    <img src={micrsoft} id='microsoft' />
      </div>
    </div>  
    </Draggable>
  )
}

export default MicrosoftWindow