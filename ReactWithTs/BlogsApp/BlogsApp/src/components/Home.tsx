import React, { createContext, useState } from "react";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Sidebar from "./Sidebar.tsx";
import AddBlog from "./AddBlog.tsx";
import Blog from "./Blog.tsx";
import { BlogInterface } from "../types/Types.ts";
import { BlogsContextInterface } from "../types/Types.ts";

interface SidebarContext {
  OpenSidebar: boolean;
  setOpenSidebar: (state: boolean) => void;
}

export const SidebarState = createContext<SidebarContext>({
  OpenSidebar: false,
  setOpenSidebar: () => {},
});

export const BlogsContext = createContext<BlogsContextInterface>({
  Blogs: [],
  setBlogs: () => {},
});

const Home = () => {
  const [OpenSidebar, setOpenSidebar] = useState<boolean>(false);
  const [Blogs, setBlogs] = useState<BlogInterface[]>([
    {
      image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
      title: "Exploring React with TypeScript",
      description:
        "Dive deep into React and TypeScript, exploring key concepts, component design, and best practices for building robust web applications.",
      date: "22/12/2022",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_Uq1NBa8FYAV4cvXprCCwvwzR8Ri86ecBNZrU-R7D9iulWEa_1LUdhofumNaHmddxvY&usqp=CAU",
      title: "Mastering JavaScript ES6+",
      description:
        "Explore the latest features of JavaScript ES6+ and learn how to use them effectively in modern web development.",
      date: "10/01/2023",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZNiz7q4C9QOW3TlXd8UmpCsAGlaygUjWWA&s",
      title: "Understanding React Hooks",
      description:
        "Learn about the fundamentals of React Hooks and how they can simplify your component logic and state management.",
      date: "05/02/2023",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMWZFi33CQ8GPxRYPL_mwCODSAxbJ2wz1U5A&s",
      title: "This Aj-Levi signing off for the day !",
      description:
        "I believe that most of the work in this project has been completed :)",
      date: "12/03/2025",
    },
  ]);

  return (
    <div onClick={() => setOpenSidebar(false)} className="h-screen w-screen overflow-x-hidden">
      <button
        onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
          event.stopPropagation();
          setOpenSidebar((prev) => !prev);
        }}
        className="fixed top-4 left-4 z-30"
      >
        <IoMenu size={30} />
      </button>
      <SidebarState.Provider
        value={{ OpenSidebar: OpenSidebar, setOpenSidebar: setOpenSidebar }}
      >
        <Sidebar />
      </SidebarState.Provider>

      <button
        className="btn btn-primary fixed right-4 top-4 font-bold"
        onClick={() =>
          (
            document.getElementById("Add_Blog") as HTMLDialogElement
          )?.showModal()
        }
      >
        <MdOutlineStickyNote2 size={25} /> New Blog
      </button>

      <AddBlog Blogs={Blogs} setBlogs={setBlogs} />

      <BlogsContext.Provider value={{ Blogs: Blogs, setBlogs: setBlogs }}>
        <div className="blogs pt-4">
          {Blogs.map((blog, index) => (
            <Blog
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              date={blog.date}
              index={index}
            />
          ))}
        </div>
      </BlogsContext.Provider>
    </div>
  );
};

export default Home;
