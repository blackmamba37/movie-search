import React from "react";
import { useContext, useState } from "react";
import { MovieContext } from "./Search";
const MovieProvider = () => {
  const movieData = useContext(MovieContext);
  console.log(movieData);
  return (
    <div className="movie">
      {movieData.titles &&
        movieData.titles.map((movieItem, i) => {
          return (
            <>
              <div className="movie">
                <div>
                  <span style={{ color: "white" }}>
                    {movieItem.primaryTitle}
                  </span>
                </div>
                <div>
                  <img src={movieItem.primaryImage.url} />
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};

export default MovieProvider;
