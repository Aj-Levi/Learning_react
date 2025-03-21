import React from "react";
import movies from "@/data/moviesData";
import MoviesList from "@/components/MoviesList";

const Home = () => {
  let totalComments: number = 0;
  let avgRatings: number = 0;

  movies.forEach((movie): void => {
    totalComments += movie.comments;
    avgRatings += movie.rating;
  });

  avgRatings /= movies.length;
  avgRatings.toFixed(1);

  return (
    <div className="flex flex-col min-h-screen p-4 min-w-screen bg-slate-800 gap-y-4">
      <div className="h-auto bg-slate-500 w-[80vw] mx-auto text-white rounded-2xl p-4 space-y-4">
        <div className="text-3xl text-center heading">
          <span className="font-bold text-amber-400">Dashboard</span> overview
        </div>
        <div className="flex w-full gap-x-2 max-md:flex-col max-md:gap-y-2">
          <div className="flex flex-col items-center flex-1 py-4 bg-stone-800 rounded-2xl gap-y-1">
            <div className="font-semibold">Total Movies</div>
            <div className="text-2xl font-bold"> {movies?.length} </div>
          </div>
          <div className="flex flex-col items-center flex-1 py-4 bg-stone-800 rounded-2xl gap-y-1">
            <div className="font-semibold">Total Comments</div>
            <div className="text-2xl font-bold"> {totalComments} </div>
          </div>
          <div className="flex flex-col items-center flex-1 py-4 bg-stone-800 rounded-2xl gap-y-1">
            <div className="font-semibold">Total Ratings</div>
            <div className="text-2xl font-bold"> {avgRatings} </div>
          </div>
        </div>
      </div>
      <MoviesList />
    </div>
  );
};

export default Home;
