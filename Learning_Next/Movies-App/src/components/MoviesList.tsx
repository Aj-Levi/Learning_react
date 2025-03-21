"use client"

import React from "react";
import movies from "@/data/moviesData";
import { useRouter } from "next/navigation";

const MoviesList = () => {
    
    const router=useRouter()
    
  return (
    <div className="h-auto bg-slate-500 w-[80vw] mx-auto text-white rounded-2xl p-4 space-y-4">
      <div className="text-3xl text-center heading">
        <span className="font-bold text-amber-400">Movie</span> List
      </div>
      <div className="flex w-full gap-x-2 max-md:flex-col max-md:gap-y-2">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col items-center flex-1 p-4 bg-stone-800 rounded-2xl gap-y-3"
          >
            <div onClick={()=>router.push(`/${movie.id}`)} className="text-xl font-bold underline transition-colors cursor-pointer hover:text-amber-400"> {movie.title} </div>
            <div className="font-semibold text-center"> {movie.description} </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
