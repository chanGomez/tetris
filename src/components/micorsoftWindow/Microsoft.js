import React, { useState } from 'react';
import "98.css"
import micrsoft from "../../img/micrsoft.png"
import "./microsoftWindow.css"
import useDragger from '../../hooks/useDragger';

function MicrosoftWindow({windowsTab, setWindowsTab, setWindowsMinTab, windowsMinTab, activeWindow, setActiveWindow}) {

  useDragger("windowsTab")
  
  return (
 <div 
      id='windowsTab'
      style={ (windowsTab ? { width: 450} : {display: "none" }
      // , activeWindow === "windows98" ? {  width: 450, zIndex: 100} : {  width: 450, zIndex: 1}
      )} 
       className=" microsoft-window window"
       >
      <div className="title-bar">
      <div className="title-bar-text">Windows 98</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize" onClick={()=> (setWindowsMinTab(!windowsMinTab))}/>
        <button aria-label="Maximize" />
        <button aria-label="Close" onClick={()=> (setWindowsTab(!windowsTab))}/>
      </div>
    </div>
    {windowsMinTab ?
        <div style={ windowsMinTab ? { } : {display: "none"} }   className='windows-img-container'> 
        <img src={micrsoft} id='microsoft' onClick={()=> (setActiveWindow("windows98"))}/>
        </div> : "" }

    </div>  
  )
}

export default MicrosoftWindow