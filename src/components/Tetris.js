import React, { useState } from 'react';
import { Link } from "react-router-dom";
import folderImg from "../img/folderImg.png"
import folderOpenedImg from "../img/folderOpenedImg.png"
import gameIcon from "../img/game-icon.png"
import MicrosoftWindow from './micorsoftWindow/Microsoft';
import windows98Icon from "../img/windows-icon.png"
import useDragger from '../hooks/useDragger';


import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import "98.css";

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Details from './details/Details';

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  //the window close button and icon change this state
  const [windowsTab, setWindowsTab] =  useState(true)
  const [tetrisTab, setTetrisTab] =  useState(true)

  //the minamize botton changes this and the icon button
  const [windowsMinTab, setWindowsMinTab] =  useState(true)
  const [tetrisMinTab, setTetrisMinTab] =  useState(true)

  //active window class
  const [activeWindow, setActiveWindow] =  useState("tetris")
  
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  useDragger("tetrisTab")

  // console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };
   
  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  
  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200);
      }
    }
  };


  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

    // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);


  //still working on the fast drop feature 2
//   const hardDrop = () => {
//     let pot = 0;
//     while (!checkCollision(player, stage, { x: 0, y: pot })) {
//        setDropTime(5);
//        pot += 1;
//     }
 
//     updatePlayerPos({ x: 0, y: pot-1, collided: true });
//  }

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={e => move(e)}
      onKeyUp={keyUp}
    >
      <div 
      id='tetrisTab'
      style={ ( 
        tetrisTab ? { } : { display: "none" }
      // activeWindow === `tetris`? { width: 700, zIndex: 100} : {width: 700, zIndex: 1} 
      )} 
      className="tetris-window window"
      onClick={()=> (setActiveWindow(`tetris`))}>
      <div className="title-bar">
        <div className="title-bar-text">TETRIS</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={()=> (setTetrisMinTab(!tetrisMinTab))}/>
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={()=> (setTetrisTab(!tetrisTab))}/>
        </div>
      </div>
      <StyledTetris style={tetrisMinTab ? { display: ""} : {display: "none"}}>
        <aside>
        <Details/>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text={`Score: ${score}`} />
              <Display text={`Rows: ${rows}`} />
              <Display text={`Level: ${level}`} />
            </div>
          )}
          <StartButton callback={startGame} />
        </aside>
        <Stage stage={stage} />
      </StyledTetris>
      </div>
      <div className='icons'>
      <div className='folder'>
      <Link to={`https://chantal-gomez.netlify.app/`} target="_blank">
        <img src={folderImg} id='folder-bio'  />
        <p> "CREATOR"</p>
      </Link>
      </div>

      <div className='game'>
      <img src={gameIcon} id='game-icon' onClick={() => (setTetrisTab(true), setTetrisMinTab(true))}/>
      <p> Tetris</p>
      </div>
      <div className='windows-98-icon'> 
  <img src={windows98Icon} id='windows-98' onClick={() => (setWindowsTab(true), setWindowsMinTab(true))} />
    <p> Windows 98</p>
  </div>
      </div>
      <MicrosoftWindow setWindowsTab={setWindowsTab} windowsTab={windowsTab} 
      windowsMinTab={windowsMinTab} setWindowsMinTab={setWindowsMinTab}
      activeWindow={activeWindow} setActiveWindow={setActiveWindow}/>
    </StyledTetrisWrapper>
  );
};

export default Tetris;