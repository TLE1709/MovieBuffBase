import React from 'react';
import { NavLink } from 'react-router-dom';
import {useGlobalContext} from "./context";
import "./App.css"; 
import Spinner from "./Spinner.js";
const Movies = () => {

  const {isLoading,isError,movie}=useGlobalContext();
  

  let errorDisplay=isError.show;
    
  //Shuffling the Array (one of the most imp lessons of my life :P)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

shuffleArray(movie); 
console.log(movie);

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