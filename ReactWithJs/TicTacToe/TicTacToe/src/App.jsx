import { createContext, useEffect, useState } from "react";
import Board from "./components/Board.jsx";
import Turn from "./components/Turn.jsx";
import Heading from "./components/Heading.jsx";
import ResetButton from "./components/ResetButton.jsx";

export const CurrentTurnData = createContext();
export const BoardData = createContext();

const App = () => {
  const [Won, setWon] = useState(false);
  const [CurrentTurn, setCurrentTurn] = useState("X");
  const [board, setBoard] = useState(Array(9).fill(null));

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner) {
      setWon((prev) => !prev);
    }
  }, [board]);

  const reset = () => {
    document.body.querySelectorAll(".box").forEach((elem)=>{
      elem.innerHTML=''
      elem.style.backgroundColor="rgb(139,92,246)"
    })
    setBoard(Array(9).fill(null))
    setWon(false)
  }

  return (
    <div className={`h-165 w-120 bg-white p-4 rounded-xl`}>
      <Heading />
      {Won ? (
        <div
          className="h-125 w-full flex justify-center items-center bg-amber-300 rounded-lg shadow-lg border-2 border-black text-5xl font-bold text-gray-800"
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {checkWinner(board)} won
        </div>
      ) : (
        <CurrentTurnData.Provider value={[CurrentTurn, setCurrentTurn]}>
          <BoardData.Provider value={[board, setBoard]}>
            <Board />
            <Turn />
          </BoardData.Provider>
        </CurrentTurnData.Provider>
      )}
      <div className="w-full flex justify-center">

      <ResetButton reset={reset} />
      </div>
    </div>
  );
};

export default App;
