import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieCard from "./Movies/MovieCard";
import MovieList from "./Movies/MovieList";

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  console.log(movieList);

  useEffect(() => {
          axios
            .get('http://localhost:3000/api/movies') // Study this endpoint with Postman
            .then(response => {
              console.log(response.data);
              setMovieList(response.data);
            })
            .catch(error => {
              console.error('Server Error', error);
            });
    }, []);




  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route exact path="/">
        <MovieList movies={movieList}/>
      </Route>
      <Route path="/movies/:id">
        <MovieCard movies={movieList}/>
      </Route>
    </div>
  );
}
