import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Tetris from './components/Tetris';


function App() {


  return(
    <BrowserRouter>
    <div className="App">
      <Tetris />
    </div>
    </BrowserRouter>
  )
}



export default App;