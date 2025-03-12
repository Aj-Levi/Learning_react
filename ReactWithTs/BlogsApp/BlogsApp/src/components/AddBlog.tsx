import { useContext } from "react";
import { BlogInterface } from "../Interfaces/Interfaces.ts";
import { BlogsContext } from "./Home.tsx";

const AddBlog = () => {

  let {Blogs, setBlogs} = useContext(BlogsContext)
  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();

  const formAction = (formData: FormData): void => {

    const file = formData.get("image") as File;
    const imageUrl = file ? URL.createObjectURL(file) : "";
    
    let newBlog: BlogInterface = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      date: `${dd}/${mm}/${yyyy}`,
      image: imageUrl,
    };

    setBlogs([...Blogs, newBlog]);
  };

  return (
    <dialog id="Add_Blog" className="modal">
      <div className="modal-box">
        <span className="text-xl underline decoration-2 underline-offset-4 mb-2">
          Add Blog
        </span>
        <form
          action={formAction}
          className="text-lg mt-4 flex flex-col gap-y-6"
        >
          <div className="flex">
            <label htmlFor="title">Title&nbsp;&nbsp;</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Blog Title"
              className="appearance-none focus:outline-none bg-transparent text-amber-400 flex-1 border-b-2"
            />
          </div>
          <div className="flex">
            <label htmlFor="description">Description&nbsp;&nbsp;</label>
            <textarea
              name="description"
              id="description"
              placeholder="Blog Description"
              rows={4}
              className="p-4 appearance-none focus:outline-none bg-transparent text-amber-400 flex-1 border-b-2"
            />
          </div>
          <div>
            <label htmlFor="date">Date&nbsp;&nbsp;</label>
            <input
              id="date"
              name="date"
              type="date"
              className="input"
              value={`${yyyy}-${mm}-${dd}`}
              disabled
            />
          </div>
          <div>
            <label htmlFor="image">Image&nbsp;&nbsp;</label>
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="p-2 rounded-xl border text-amber-400"
            />
          </div>
          <button type="submit" className="btn btn-primary text-lg">
            Add Blog
          </button>
        </form>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddBlog;
