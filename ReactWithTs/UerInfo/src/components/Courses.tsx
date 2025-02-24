import React from "react";

const Courses = () => {
  const CardDetails = [
    {
      title: "Python",
      desc: "A high-level programming language known for its readability and versatility.",
      image:
        "https://www.classcentral.com/report/wp-content/uploads/2023/09/bcg_python_banner.png",
      tags: ["Programming", "Python"],
    },
    {
      title: "Express",
      desc: "A minimal and flexible Node.js web application framework for building web applications and APIs.",
      image:
        "https://i.ytimg.com/vi/nH9E25nkk3I/maxresdefault.jpg",
      tags: ["Node.js", "Backend", "Framework"],
    },
    {
      title: "TypeScript",
      desc: "A superset of JavaScript that introduces static types for enhancing code quality.",
      image:
        "https://img-c.udemycdn.com/course/750x422/986406_89c5_3.jpg",
      tags: ["Programming", "Js", "Types"],
    },
    {
      title: "C++",
      desc: "A high-performance programming language used for systems/software development and game programming.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbuQf8ftFEKpAU5a02pE-FvGkzHnAuZUrY3Q&s",
      tags: ["Programming", "C++", "Speed"],
    },
  ];

  return (
    <div className="mt-10 mb-20 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-5">
      {Array(4)
        .fill(null)
        .map(
          (_: null, index: number): React.ReactNode => (
            <div className="card bg-base-100 justify-self-center w-80 max-xl:w-60 shadow-xl">
              <figure>
                <img src={CardDetails[index].image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {CardDetails[index].title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{CardDetails[index].desc}</p>
                <div className="mt-2 card-actions justify-end">
                  {CardDetails[index].tags.map((item, ind) => (
                    <div key={ind} className="badge badge-outline">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default Courses;
