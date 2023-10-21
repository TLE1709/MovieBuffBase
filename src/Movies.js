import React from 'react';
import { NavLink } from 'react-router-dom';
import {useGlobalContext} from "./context";
import "./App.css"; 
import Spinner from "./Spinner.js";
const Movies = () => {

  const {isLoading,isError,movie}=useGlobalContext();
  let errorDisplay=isError.show;

  if(isLoading){
    return <>
      <Spinner />
    </>
  }
  return (
    <>
    <section className="movie-page">
      <div className="container grid grid-4-col">
    
      {
        movie?(errorDisplay==="false")&&movie.map((curMovie)=>{

          const {imdbID,Title,Poster}=curMovie;
          const movieName=Title.substring(0,15);
          return (
            <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className="card">
            <div className="card-info">
            <h2>{Title.length>=15?`${movieName}...`:movieName}</h2>
            <img src={Poster} alt={imdbID} />
           </div>
            </div>
            </NavLink>
          );
        })
      :""}
      </div>
      </section>
    
   </> 
  );
};

export default Movies;