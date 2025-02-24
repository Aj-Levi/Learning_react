import React from "react";

const Home = () => {

  const CardDetails = [
    {
      title: "Python",
      desc: "A high-level programming language known for its readability and versatility.",
      image: "https://www.classcentral.com/report/wp-content/uploads/2023/09/bcg_python_banner.png",
      tags: [
        "Programming", "Python"
      ]
    },
    {
      title: "React",
      desc: "A JavaScript library for building interactive user interfaces.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAsoAHcu7RzGzUcl-dOR1_yx8ij4XXvGdeaQ&s",
      tags: [
        "JavaScript", "UI", "Library"
      ]
    },
    {
      title: "TypeScript",
      desc: "A superset of JavaScript that introduces static types for enhancing code quality.",
      image: "https://img-c.udemycdn.com/course/750x422/986406_89c5_3.jpg",
      tags: [
        "Programming", "Js", "Types"
      ]
    },
    {
      title: "Node.js",
      desc: "A runtime environment for executing JavaScript on the server side.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0uM3M25tDITF6GSHpe8TyNDGPKujgzWXkg&s",
      tags: [
        "JavaScript", "Backend", "Runtime"
      ]
    },
  ]

  return (
    <div className="mt-10 mb-20 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5">
      {Array(4)
        .fill(null)
        .map((_:null,index:number): React.ReactNode => (
          <div className="card bg-base-100 justify-self-center w-80 max-xl:w-60 shadow-xl">
            <figure>
              <img
                src={CardDetails[index].image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {CardDetails[index].title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{CardDetails[index].desc}</p>
              <div className="mt-2 card-actions justify-end">
              {CardDetails[index].tags.map((item,ind)=>(
                <div key={ind} className="badge badge-outline">{item}</div>
              ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Home;
