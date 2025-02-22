import React from "react";
import { GrPowerReset } from "react-icons/gr";

const ResetButton = ({reset}) => {
  return (
    <button onClick={reset}
      className="mt-3 bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group"
      type="button"
    >
      <div className="bg-red-500 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
        <GrPowerReset className="text-white" />
      </div>
      <p className="translate-x-2">Reset</p>
    </button>
  );
};

export default ResetButton;
