import React, {useState} from "react";
//import { useDispatch} from "react-redux";
import { fetchMovies } from "../redux/movieSlice";
import {useAppDispatch} from "../Hooks"
const SearchBar: React.FC = () => {
    const [query,setquery]=useState("");

    const dispatch = useAppDispatch();
    const handleSearch=(e:React.FormEvent) => {
        e.preventDefault();
        dispatch(fetchMovies(""));

    };


    return(
        <div>
            <form onSubmit={handleSearch} className="search-bar">

            <input 
            type="text"
            placeholder="search movies.."
            value={query}
            onChange={(e) => setquery(e.target.value)}/>
            <button type="submit"></button>
            </form>
            </div>
             );
            };

export default SearchBar;