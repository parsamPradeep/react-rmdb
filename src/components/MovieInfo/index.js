import React from 'react';
import Thumb from '../Thumb';

import { POSTER_SIZE, IMAGE_BASE_URL } from '../../config';
import NoImage from '../../images/no-image.svg';

import { Wrapper, Content, Text } from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
      <Thumb
        key={movie.id}
        clickable={false}
        image={
          movie.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : NoImage
        }
        movieId={movie.id}
      />
    </Content>
    <Text>
      <h1>{movie.title}</h1>
      <h3>PLOT</h3>
      <p>{movie.overview}</p>

      <div className="rating-directors">
        <div>
          <h3>RATING</h3>
          <div className="score">{movie.vote_average}</div>
        </div>
        <div className="director">
          <h3>DIRECTOR</h3>
        </div>
      </div>
    </Text>
  </Wrapper>
);

export default MovieInfo;
