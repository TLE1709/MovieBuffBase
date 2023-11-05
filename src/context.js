
/*The Data Center of My Project*/

import React,{useContext,useEffect,useState} from "react";
//Context API and useContext

//ContextAPI is used to data from parent to child in a easier manner 

//MY API KEY
export const API_KEY=`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`

//Creating a context
const AppContext=React.createContext();

//creating Provider
const AppProvider=({children}) =>{
    
    //All my states and their management
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setIsError]=useState({show:"false",msg:""});
    const [query,setQuery]=useState('hello');


    const getMovies=async(url)=>{

        setIsLoading(true);
        try{
            const res=await fetch(url);
            // console.log(res);
            const data=await res.json();
            // console.log(data);
            
            if(data.Response==="True"){
                setMovie(data.Search);
                setIsLoading(false);
                setIsError({
                    show:"false",
                    msg:""
                })
                console.log("Operation Successful");
            }
            else{
                setIsLoading(false);
                setIsError({
                    show:"true",
                    msg:data.Error
                })
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

            getMovies(`${API_KEY}&s=${query}`);

        },500);

        return ()=>clearTimeout(timerOut);
    },[query]);

    return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>{children}</AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};

// context(warehouse) -> jaha saare information/data hai
// provider -> joh data provide krega like a mini van in a big warehouse
// consumer -> joh data lega i.e a "consumer" -> impmenetation difficult so we use useContext