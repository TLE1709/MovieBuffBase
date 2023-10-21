import React,{useState,useEffect} from 'react';
import { NavLink,useParams } from "react-router-dom";
import {API_KEY} from "./context";
import Spinner from "./Spinner";
const  SingleMovie = () => {
  const  { id } = useParams();

  const [isLoading,setIsLoading]=useState(true);
  const [movie,setMovie]=useState("");
  // const [query,setQuery]=useState('hello');


  const getMovies=async(url)=>{

      setIsLoading(true);
      try{
          const res=await fetch(url);
          const data=await res.json();
          console.log(data);
          
          if(data.Response==="True"){
              setMovie(data);
              setIsLoading(false);
              console.log("Operation Successful");
          }
          else{
              setIsLoading(false);
          }
      }
      catch(error){
          console.log(error);
      }
  };

  useEffect(()=>{
      /*Implementation of Debouncing*/
      //Debouncing is basically display of data after some seconds.It is implemented using setTimeOut function.
      //Reduces hits on API and therefore reduces load on the server
      let timerOut=setTimeout(()=>{
          // console.log(`${API_KEY}&s=${query}`);

          getMovies(`${API_KEY}&i=${id}`);

      },500);

      return ()=>clearTimeout(timerOut);
  },[id]);

  if(isLoading){
    return <>
      <Spinner/>
    </>
  }

  return (
<section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className=""></p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie