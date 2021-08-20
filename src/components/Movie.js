import React from 'react';
import { useParams } from 'react-router-dom';
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import Grid from './Grid';
import Spinner from './Spinner';
import NoImage from '../images/no-image.svg';
import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
  const { movieId } = useParams(movieId);
  const { state: movie, loading, error } = useMovieFecth(movieId);
  console.log(movie);
  return (
    <>
      <div> Movie </div>
    </>
  );
};
export default Movie;
