import React from "react";
import movies from "@/data/moviesData";

interface Movie {
  id: string;
  title: string;
  comments: number;
  rating: number;
  description: string;
  commentsList: string[];
}

const movie = async({ params }: { params: Promise<{ movie_id: string }> }) => {
  const { movie_id } = await params;

  let movie: Movie;

  movies.forEach((Movie: Movie): void => {
    if (Movie.id === movie_id) movie = Movie;
  });

  return (
    <div className="flex flex-col min-h-screen p-4 text-white min-w-screen bg-slate-800 gap-y-4">
      <div className="h-auto bg-slate-500 w-[80vw] mx-auto text-white rounded-2xl p-4 space-y-4">
        <div className="p-4 space-y-2 bg-slate-700 rounded-2xl">
          <div className="text-2xl font-bold underline"> {movie!.title} </div>
          <div className="font-semibold"> {movie!.description} </div>
        </div>
        <div className="flex w-full gap-x-2 max-md:flex-col max-md:gap-y-2">
          <div className="flex flex-col items-center flex-1 py-4 bg-stone-800 rounded-2xl gap-y-1">
            <div className="text-lg font-semibold">Rating</div>
            <div className="font-bold">
              <span className="text-xl font-bold text-amber-300">
                {" "}
                {movie!.rating}{" "}
              </span>{" "}
              / 5
            </div>
          </div>
          <div className="flex flex-col items-center flex-1 py-4 bg-stone-800 rounded-2xl gap-y-1">
            <div className="text-lg font-semibold">Comments</div>
            <div className="font-bold">
              <span className="text-xl font-bold text-amber-300">
                {" "}
                {movie!.comments}{" "}
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="flex flex-col p-4 gap-y-4 bg-slate-700 rounded-2xl">
          <div className="text-2xl font-bold underline">Comments</div>
          <div className="space-y-4">
            {movie!.commentsList.map((comment: string , index: number) => (
              <div key={index} className="p-4 font-semibold bg-slate-500 rounded-2xl"> {comment} </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default movie;
