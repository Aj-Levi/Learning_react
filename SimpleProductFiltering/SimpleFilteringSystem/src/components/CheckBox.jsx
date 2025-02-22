import { useContext } from "react";
import { SetCheckboxdata } from "../App.jsx";

const CheckBox = () => {
  const setChecked = useContext(SetCheckboxdata);

  return (
    <div className="flex items-center mt-4">
      <input
        type="checkbox"
        name="inStock"
        id="inStock"
        className="h-5 w-5 accent-purple-500"
        onClick={() => { setChecked(prev => !prev) }}
      />
      <label htmlFor="inStock" className="ml-2 text-lg">
        Show Products In Stock
      </label>
    </div>
  );
};

export default CheckBox;
