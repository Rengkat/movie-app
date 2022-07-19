import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

export const MovieAppContext = createContext();
const initialState = {
  movies: [],
  searched: "",
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  // console.log(state.movies);
  const getSearch = (inputSearched) => {
    dispatch({ type: "SEARCHED_MOVIE", payload: inputSearched });
  };
  const fetchData = async (search) => {
    try {
      const data = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=3fda3c3&s=${search}`
      );
      const response = await data.json();
      dispatch({ type: "FETCH_DATA", payload: response });
    } catch (error) {}
  };

  useEffect(() => {
    fetchData(state.searched);
  }, [state.searched]);

  return (
    <MovieAppContext.Provider value={{ ...state, getSearch }}>
      {children}
    </MovieAppContext.Provider>
  );
};

export default AppContext;
