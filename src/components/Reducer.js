const Reducer = (state, action) => {
  if (action.type === "FETCH_DATA") {
    return { ...state, movies: action.payload };
  }
  if (action.type === "SEARCHED_MOVIE") {
    return { ...state, searched: action.payload };
  }
  return state;
};

export default Reducer;
