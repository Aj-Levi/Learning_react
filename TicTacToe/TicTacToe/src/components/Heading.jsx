import React from "react";

const Heading = () => {
  return (
    <header className="h-15 mb-2 flex justify-center items-center bg-gray-800 text-white rounded-xl">
      <h1
        className="text-4xl"
        style={{
          fontFamily: "Protest Guerrilla, sans-serif",
        }}
      >
        Tic Tac Toe
      </h1>
    </header>
  );
};

export default Heading;
