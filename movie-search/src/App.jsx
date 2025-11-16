import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchComponent from "./Search";
import "./Movie.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1>Movie Search</h1>
        <SearchComponent />
      </div>
    </>
  );
}

export default App;
