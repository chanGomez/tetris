import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Tetris from './components/Tetris';

const App = () => (
  <BrowserRouter>
  <div className="App">
    <Tetris />
  </div>
  </BrowserRouter>
);

export default App;