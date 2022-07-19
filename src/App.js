import { useContext } from "react";
import { MovieAppContext } from "./components/AppContext";
import MovieList from "./components/MovieList";
function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
