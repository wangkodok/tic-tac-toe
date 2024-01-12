/* eslint-disable */
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    // setGameBoard((prevGameBoard) => {
    //   prevGameBoard[rowIndex][colIndex] = "X";
    //   return prevGameBoard;
    // });

    setGameBoard((prevGameBoard) => {
      const updateBoard = [
        ...prevGameBoard.map((innerArray) => {
          return [...innerArray];
        }),
      ];
      updateBoard[rowIndex][colIndex] = activePlayerSymbol;
      return updateBoard;
    });

    onSelectSquare();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() => {
                        return handleSelectSquare(rowIndex, colIndex);
                      }}
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
