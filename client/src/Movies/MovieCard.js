import {React, useState, useEffect } from 'react';
import axios from 'axios';
import {
  Route,
  NavLink,
  Switch,
  Link,
  useParams,
} from 'react-router-dom';


export default function MovieCard (props) {

  const [movie, setMovie] = useState({});
  const { id } = useParams();

  console.log(movie);

  useEffect(() => {
    if(id !== undefined) {
      console.log("if");
      setMovie(props.movies?.filter((movie) =>{
        //console.log(movie.id);
        return movie.id == id;
      })[0])
    } else {
      console.log("else")
      setMovie(props.movie);
    }
}, [id, props.movies]);

  //console.log(props.movie);

  return(

        <div className="movie-card">
        <Link to={`/movies/${movie?.id}`}>
          <h2>{movie?.title}</h2>
          <div className="movie-director">
            Director: <em>{movie?.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie?.metascore}</strong>
          </div>
        </Link>
        </div>

      )}
