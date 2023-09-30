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
  const [tie, setTie] = useState(0);
  const audioComponentRef = useRef(null);

  const winner = CheckForWinner(squares);
  const draw = CheckForDraw(squares);
  const players = {
    0: 'X',
    1: 'O'
  };

  function squareClick(i) {
    if (winner || draw) {
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
    if (winner) {
      if (squares[winner[0]] === players[0]) {
        setPlayerOneScore(playerOneScore + 1);
      } else if (squares[winner[0]] === players[1]) {
        setPlayerTwoScore(playerTwoScore + 1);
      } 
      animateWinningSquares(winner);

    } else if (draw) {
      setTie(tie + 1);
    } 
  }, [xIsNext]);

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
            player1={playerOneScore} 
            player2={playerTwoScore} 
            tie={tie}
            xIsNext={xIsNext}
            winner={winner}
            draw={draw} 
          /> 
        }
      </div>
    </>
  );
}
