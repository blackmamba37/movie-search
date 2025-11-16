import React, { useEffect } from "react";
import { useState, useReducer, createContext } from "react";
import MovieProvider from "./MovieComponent";

import "./Movie.css";

export const MovieContext = createContext();
const SearchComponent = () => {
  const [searchKey, setSearchTerm] = useState("");
  const [movieData, setMovieData] = useState({});
  const [searchLimit, setSearchLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      const resp =
        searchKey === ""
          ? await fetch(
              "https://api.imdbapi.dev/search/titles?query=*&limit=" +
                searchLimit
            )
          : await fetch(
              "https://api.imdbapi.dev/search/titles?query=" +
                searchKey +
                "&limit=" +
                searchLimit
            );
      const json = await resp.json();
      setMovieData(json);
    };

    fetchData();
  }, [searchKey, searchLimit]);

  return (
    <>
      <table>
        <tr>
          <td>
            <div className="search">
              <label>Enter Search Term</label>
            </div>
          </td>
          <td>
            <div className="search">
              <input
                type="text"
                id="srchInput"
                value={searchKey}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search input"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="search">
              <label>Enter Search Limit</label>
            </div>
          </td>
          <td>
            <div className="search">
              <input
                type="text"
                id="srchLimit"
                value={searchLimit}
                onChange={(e) => setSearchLimit(e.target.value)}
                className="search input"
              />
            </div>
          </td>
        </tr>
      </table>

      <div className="container">
        <MovieContext.Provider value={movieData}>
          <MovieProvider />
        </MovieContext.Provider>
      </div>
    </>
  );
};

export default SearchComponent;
