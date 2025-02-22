import React, { useContext } from "react";
import { CurrentTurnData } from "../App.jsx";

const Turn = () => {
  let [CurrentTurn, setCurrentTurn] = useContext(CurrentTurnData);

  return (
    <div className="flex justify-center items-center h-20 w-full mt-5 bg-amber-300 rounded-lg shadow-lg border-2 border-black">
      <span
        className="text-2xl font-bold text-gray-800"
        style={{
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Next Player: {CurrentTurn}
      </span>
    </div>
  );
};

export default Turn;
