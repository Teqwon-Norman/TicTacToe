import React, { useState, useEffect, useRef } from "react";
import BoardComponent from "./GameBoardComponent";
import { CheckForWinner, CheckForDraw } from "../game_utils/GameOver";
import { motion } from "framer-motion";
import ScoreKeeperComponent from "./ScoreKeeperComponent";
import AudioComponent from './AudioComponent';
import GameSoundEffect from '../assets/GameSoundEffect.mp3';


export default function GameComponent() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);
  const audioComponentRef = useRef(null);

  const isWinner = CheckForWinner(squares);
  const isDraw = CheckForDraw(squares);
  const players = {
    0: 'X',
    1: 'O'
  };

  function squareClick(i) {
    if (isWinner || isDraw) {
      setSquares(Array(9).fill(null));
      setXIsNext(!xIsNext);

    } else if (squares[i]) {
      return;

    } else {
      const nextSquares = [...squares];
      nextSquares[i] = xIsNext ? players[0] : players[1];
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  }

  function animateWinningSquares(winningSquares) {
    for (let i = 0; i < winningSquares.length; i++) {
      squares[winningSquares[i]] = (
        <motion.div
          animate={{ rotateX: 360, color: "red" }} style={{ color: "white" }}
          transition={{ duration: 1 }}
        >
          {squares[winningSquares[i]]}
        </motion.div>
      );
    }
  }

  useEffect(() => {
    if (isWinner) {
      if (squares[isWinner[0]] === players[0]) {
        setPlayerOneScore((prevState) => prevState + 1);
      } else if (squares[isWinner[0]] === players[1]) {
        setPlayerTwoScore((prevState) => prevState + 1);
      } 
      animateWinningSquares(isWinner);

    } else if (isDraw) {
      setDrawScore((prevState) => prevState + 1);
    } 
  }, [xIsNext, isWinner, isDraw, squares, players]);

  return (
    <>
      <div className="game">
        { 
          <AudioComponent 
            audio={GameSoundEffect}
            color={"#ffff"}
            ref={audioComponentRef}
          /> 
        }
        { 
          <BoardComponent
            squares={squares}
            handleClick={squareClick}
          /> 
        }
        { 
          <ScoreKeeperComponent 
            playerOne={playerOneScore} 
            playerTwo={playerTwoScore} 
            gameDraw={drawScore}
            xIsNext={xIsNext}
            isWinner={isWinner}
            isDraw={isDraw} 
          /> 
        }
      </div>
    </>
  );
}
