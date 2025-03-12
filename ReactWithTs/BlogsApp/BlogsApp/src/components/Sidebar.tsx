import React, { useContext } from "react";
import { SidebarState } from "./Home.tsx";

const Sidebar = () => {
  const { OpenSidebar, setOpenSidebar } = useContext(SidebarState);

  return (
    <div
      onClick={(event: React.MouseEvent<HTMLDivElement>) =>
        event.stopPropagation()
      }
      className={`fixed left-0 z-20 h-screen bg-slate-600 w-96 max-sm:w-screen rounded-r-lg transition-transform duration-700 delay-100 ease-in-out ${
        OpenSidebar ? "translate-x-0" : "-translate-x-full"
      } `}
    ></div>
  );
};

export default Sidebar;
