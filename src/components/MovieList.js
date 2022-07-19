import { useContext, useState } from "react";
import { MovieAppContext } from "./AppContext";
import Hero from "./Hero";
import SearchedMovies from "./SearchedMovies";

const MovieList = () => {
  // const [moves, setMovies] = useState(data);
  //   const { getSearch, searched, movies } = useContext(MovieAppContext);

  //   console.log(movies);
  return (
    <div>
      <nav className="nav ">
        <header className=" h-16 p-5 lg:ml-14 border-2 border-white flex justify-center items-center">
          <h1 className="text-white">MyTestApp</h1>
        </header>
      </nav>
      <Hero />
      <SearchedMovies />
    </div>
  );
};

export default MovieList;
