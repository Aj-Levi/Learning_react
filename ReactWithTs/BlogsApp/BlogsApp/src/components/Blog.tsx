import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { BlogInterface } from "../types/Types.ts";
import { BlogsContext } from "./Home.tsx";
import { useContext, useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation.tsx";
import EditModal from "./EditModal.tsx";

const Blog = ({
  image,
  title,
  description,
  date,
  index,
}: BlogInterface & { index: number }) => {
  let { Blogs, setBlogs } = useContext(BlogsContext);

  const remove = (): void => {
    let newBlogs = Blogs.filter((_, ind) => ind !== index);
    setBlogs(newBlogs);
  };

  const [Bookmarked, setBookmarked] = useState<boolean>(false);

  let bookmarked = (
    <IoBookmark
      size={21}
      className="cursor-pointer text-amber-300 transition-colors active:scale-95"
      onClick={() => setBookmarked((prev) => !prev)}
    />
  );
  let notbookmarked = (
    <IoBookmarkOutline
      size={21}
      className="cursor-pointer hover:text-amber-300 transition-colors active:scale-95"
      onClick={() => setBookmarked((prev) => !prev)}
    />
  );

  return (
    <div className="flex gap-4 p-2 bg-gray-800 rounded-xl w-[40vw] mx-auto mb-4">
      <div className="image w-1/4 h-30 my-auto">
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="w-3/4 h-auto flex flex-col gap-2">
        <div className="title font-bold underline decoration-2 underline-offset-4 text-lg">
          {title}
        </div>
        <div className="desc text-white"> {description} </div>
        <div className="flex justify-between">
          <div className="date text-teal-300 grow-6"> {date} </div>
          <div className="options flex justify-evenly items-center grow-1">
            {Bookmarked ? bookmarked : notbookmarked}
            <button
              onClick={() =>
                (
                  document.getElementById("EditModal") as HTMLDialogElement
                )?.showModal()
              }
            >
              <FaRegEdit
                size={21}
                className="cursor-pointer hover:text-blue-300 transition-colors active:scale-95"
              />
            </button>
            <EditModal index={index} />

            <button
              onClick={() =>
                (
                  document.getElementById("DeleteModal") as HTMLDialogElement
                )?.showModal()
              }
            >
              <MdOutlineDeleteOutline
                size={23}
                className="cursor-pointer hover:text-red-500 transition-colors active:scale-95"
              />
            </button>
            <DeleteConfirmation remove={remove} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
