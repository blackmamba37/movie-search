import React from "react";
import { useContext, useState } from "react";
import { MovieContext } from "./Search";
const MovieProvider = () => {
  const movieData = useContext(MovieContext);
  return (
    <>
      {movieData.titles &&
        movieData.titles.map((movieItem, i) => {
          return (
            <div className="movie">
              <div></div>
              <div>
                <img
                  src={
                    movieItem.primaryImage ? movieItem.primaryImage.url : "#"
                  }
                />
              </div>
              <div>
                <span>{movieItem.primaryTitle} </span>
                <h3>{movieItem.originalTitle}</h3>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default MovieProvider;
