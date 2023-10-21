import React from 'react'
import {useGlobalContext} from "./context";
const Search = () => {
  
  const {isError,query,setQuery}=useGlobalContext();
  return <>
  <section className="search-section">
    <h2>Search Your Favourite Movie</h2>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
      <div>
        <input type="text" placeholder="Search Here" value={query} onChange={(e)=>setQuery(e.target.value)}/>
      </div>

      <div className="card-error">
        <p>{isError.show && isError.msg} </p>
      </div>
          </form>
        </section>
  </>
}

export default Search