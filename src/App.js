import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Tetris from './components/Tetris';
import screenSaver from "./img/screen-saver.mp4"
import movingImage from "./img/moving-image.mp4"
import "./App.css"


function App() {
  const [userActivty, setUserActivty] = useState(true)
  const [game, setGame] = useState(false)

  const checkInactivity = () => {
    const expireTime = localStorage.getItem("expireTime")

    if(expireTime < Date.now()){
      console.log("play screen saver ")
      setUserActivty(false)
    }
  }

  const updateExpireTime = () => {
    const newExpireTime = Date.now() + 60000
    localStorage.setItem("expireTime", newExpireTime)
    setUserActivty(true)

    console.log(localStorage.expireTime, newExpireTime);
  }

  useEffect(() => {

    //check for inactivity after 8 seconds
    const interval = setInterval(()=> {
      checkInactivity();
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  //Update Expire Time on any user activity
  useEffect(() => {

    //Set initial expire time
    updateExpireTime()

    //set event listeners
    window.addEventListener("click", updateExpireTime)
    window.addEventListener("keypress", updateExpireTime)
    window.addEventListener("scroll", updateExpireTime)
    window.addEventListener("mousemove", updateExpireTime)

    //clean up
    return () => {
      window.removeEventListener("click", updateExpireTime)
      window.removeEventListener("keypress", updateExpireTime)
      window.removeEventListener("scroll", updateExpireTime)
      window.removeEventListener("mousemove", updateExpireTime)
    }
  }, [game])

  return(
    <BrowserRouter>
    <div className="App">
      {userActivty || game ? <Tetris setGame={setGame} /> : 
      <div className='screen-saver'>
          <video autoPlay muted loop className='screen-saver'>
          <source src={screenSaver} type="video/mp4"/>
           </video>
      </div> }
    </div>
    </BrowserRouter>
  )
}



export default App;