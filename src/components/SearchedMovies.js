import React, { useState, useEffect } from "react";

const SearchedMovies = () => {
  //   state
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  //   fetch fuction
  const fetchMovies = async (search) => {
    setLoading(true);
    try {
      const data = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=3fda3c3&s=${search}`
      );
      const response = await data.json();
      if (response.Search) {
        setMovies(response.Search);
        setLoading(false);
        setError(false);
      }
    } catch (error) {
      setError(true);
    }
  };
  console.log(movies);
  useEffect(() => {
    fetchMovies(search);
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className="searchInput w-[90%] m-auto my-10 md:my-20">
        <label htmlFor="search" className="block text-xl font-semibold">
          Search:
        </label>
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          className="border-2 border-black w-full p-2 md:p-3 "
        />
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-[90%] mt-10 mb-20 mx-auto gap-3">
        {movies &&
          movies.map((movie) => {
            return (
              <div className="border-2 shadow-md my-5">
                <img
                  src={movie.Poster}
                  alt="image"
                  className="w-[200px] h-[250px] md:w-[300px] md:h-[280px] object-cover "
                />
                <div className=" text-center p-4 capitalize text-xl font-semibold">
                  <h1>{movie.Title}</h1>
                </div>
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
