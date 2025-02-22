import React from "react";
import Box from "./Box.jsx";

const Board = () => {
  return (
    <div
      className={`width-[100%] h-100 bg-white grid grid-cols-3 grid-rows-3 gap-2`}
    >
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <Box key={index} index={index} />
        ))}
    </div>
  );
};

export default Board;
