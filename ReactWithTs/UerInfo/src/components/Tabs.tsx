import React, { ReactNode, useState } from "react";
import { FaHome } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { SiCoursera } from "react-icons/si";
import { IoMdContact } from "react-icons/io";

import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";

const Tabs = () => {
  const [Active, setActive] = useState<number>(0);
  const [Content, setContent] = useState<React.ReactNode>(<Home />);

  const handleActive = (index: number): void => {
    setActive(index);

    switch (index) {
      case 0:
        setContent(<Home />);
        break;
      case 1:
        setContent(<About />);
        break;
      case 2:
        setContent(<Courses />);
        break;
      case 3:
        setContent(<Contact />);
        break;
    }
  };

  return (
    <div className="mt-10 w-[95%] mx-auto">
      <div role="tablist" className="tabs tabs-boxed flex justify-between bg-transparent">
        {Array(4)
          .fill(null)
          .map((_, index) => {
            return (
              <div
                key={index}
                onClick={() => handleActive(index)}
                role="tab"
                className={`tab w-[12rem] text-lg max-md:text-md max-sm:text-sm ${
                  index === Active ? "tab-active" : ""
                }`}
                style={{
                    fontFamily: "Poppins, sans-serif"
                }}
              >
                {index === 0 ? <FaHome className="text-amber-400" /> : index === 1 ? <CiCircleInfo className="text-amber-400" /> : index === 2 ? <SiCoursera className="text-amber-400" /> : <IoMdContact className="text-amber-400" size={20} />}
                &nbsp;
                {index === 0 ? <span>Home</span> : index === 1 ? <span>About</span> : index === 2 ? <span>Courses</span> : <span>Contact</span>}
              </div>
            );
          })}
      </div>
      {Content}
    </div>
  );
};

export default Tabs;
