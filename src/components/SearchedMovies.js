import React, { useState } from "react";
import data from "../components/data";
const SearchedMovies = () => {
  const [movies, setMovies] = useState(data);
  //   const fiveMovies = movies.slice(0, 5);
  //   const nextFive = movies.slice(5, 10);
  console.log(movies);
  return (
    <div>
      <div className="searchInput w-[90%] m-auto my-20">
        <label htmlFor="search" className="block text-xl font-semibold">
          Search:
        </label>
        <input
          type="text"
          className="border-2 border-black w-full p-3 overflow-scroll"
        />
      </div>
      <div className=" grid grid-cols-5 w-[90%] my-20 mx-auto gap-5">
        {movies.map((movie) => {
          return (
            <div>
              <img
                src={movie.Poster}
                alt="image"
                className="w-[300px] h-[300px]"
              />
              <h1>{movie.Title}</h1>
            </div>
          );
        })}
      </div>
      {/* <div className=" grid grid-cols-5 w-[90%] mx-auto gap-5">
        {nextFive.map((movie) => {
          return (
            <div>
              <img
                src={movie.Poster}
                alt="image"
                className="w-[300px] h-[300px]"
              />
              <h1>{movie.Title}</h1>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default SearchedMovies;
