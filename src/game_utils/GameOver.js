import React from 'react';

export function CheckForWinner(squares) {
  const possibleWins = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
  
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
  
    [0, 4, 8], // top left to bottom right diagonal
    [2, 4, 6], // top right to bottom left diagonal
  ];

  for (let win = 0; win < possibleWins.length; win++) {
    const [a, b, c] = possibleWins[win];

    const squaresA = React.isValidElement(squares[a]) ? squares[a].props.children : squares[a];
    const squaresB = React.isValidElement(squares[b]) ? squares[b].props.children : squares[b];
    const squaresC = React.isValidElement(squares[c]) ? squares[c].props.children : squares[c];

    if (squaresA && squaresA === squaresB && squaresA === squaresC) {
      return [a, b, c];
    }
  }
  return;
}

export function CheckForDraw(squares) {
  return squares.every((square) => square !== null);
}

