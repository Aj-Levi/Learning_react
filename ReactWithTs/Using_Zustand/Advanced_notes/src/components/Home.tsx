import Sidebar from "./Sidebar";
import { RiMenuUnfold3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useSidebarStore } from "../store";
import AddOrUpdateNote from "./AddOrUpdateNote";

const Home = () => {
  const { openSidebar, toggleSidebar } = useSidebarStore();

  return (
    <div className="w-screen h-screen">
      <button
        className="fixed z-30 btn btn-primary top-4 left-4 lg:hidden"
        onClick={toggleSidebar}
      >
        {" "}
        {openSidebar ? <IoCloseSharp /> : <RiMenuUnfold3Line />}{" "}
      </button>
      <Sidebar />
      <AddOrUpdateNote />
    </div>
  );
};

export default Home;
