import Square from './SquareComponent';
import React from 'react';


export default function BoardComponent(props) {
  const classNameMap = {
    0 : "square top left",
    1 : "square top",
    2 : "square top right",
    3 : "square left",
    4 : "square",
    5 : "square right",
    6 : "square bottom left",
    7 : "square bottom",
    8 : "square bottom right",
  };

  return (
    <div className="board">
      {
        Object.entries(classNameMap).map((value) => 
          <Square
            className={classNameMap[value[0]]}
            value={props.squares[value[0]]}
            onSquareClick={() => props.handleClick(value[0])}
          />)
      }
    </div>
  );
}
