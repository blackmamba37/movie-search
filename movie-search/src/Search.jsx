import React, { useEffect } from "react";
import {useState, useReducer, createContext} from "react";
import MovieProvider from "./MovieComponent";

import  "./Movie.css"

export const MovieContext = createContext();
const SearchComponent =  () => {


    const [searchKey, setSearchTerm] = useState("");
    const [movieData, setMovieData] = useState({});

    useEffect(()=> {
        const fetchData = async () => {
        const resp = searchKey==="" ? await fetch("https://api.imdbapi.dev/search/titles?query=*&limit="+3) : await fetch("https://api.imdbapi.dev/search/titles?query="+searchKey+"&limit=3");
        const json = await resp.json();
        setMovieData(json);
        }

        fetchData();

    },[searchKey])






    return(
    <>
       <div className="search">
            <input type="text" id="srchInput" value={searchKey} onChange={(e) => setSearchTerm(e.target.value)} className="search input"/>

        </div>
        <div  className="container">

        <MovieContext.Provider value={movieData}>
            <MovieProvider/>
        </MovieContext.Provider>
        </div>
    </>
    )


} 

export default SearchComponent;