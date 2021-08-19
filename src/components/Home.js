import React from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

import HeroImage from './HeroImage';
import Grid from './Grid';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Thumb from './Thumb';
import NoImage from '../images/no-image.svg';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
const Home = () => {
  const { state, loading, error, setSearchTearm } = useHomeFetch();

  console.log(state);

  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
            state.results[0].backdrop_path
          }`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
      <SearchBar setSearchTearm={setSearchTearm} />
      <Grid header="Popular Movies">
        {state.results.map(movie => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      <Spinner />
    </>
  );
};

export default Home;
