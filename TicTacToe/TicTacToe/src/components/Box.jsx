import React, { useContext, useState } from "react";
import { BoardData, CurrentTurnData } from "../App.jsx";

const Box = ({ index }) => {
  let [CurrentTurn, setCurrentTurn] = useContext(CurrentTurnData);
  let [Board, setBoardData] = useContext(BoardData);

  const fillbox = (e) => {
    if (!Board[index]) {
      let temp = [...Board];
      e.target.innerHTML = CurrentTurn;
      e.target.style.backgroundColor = "rgb(251,191,36)";
      temp[index] = CurrentTurn;
      setBoardData(temp);
      CurrentTurn === "X" ? setCurrentTurn("O") : setCurrentTurn("X");
    }
  };

  return (
    <div
      className={`box h-[100%] w-[100%] text-white text-5xl bg-violet-500 border-2 border-black flex justify-center items-center rounded-xl transition-colors active:scale-95`}
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
      onClick={fillbox}
    ></div>
  );
};

export default Box;
