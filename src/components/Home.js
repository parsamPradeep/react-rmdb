import React, { Component } from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import API from '../API';
import HeroImage from './HeroImage';
import Grid from './Grid';
import { useHomeFetch } from '../hooks/useHomeFetch';
import Thumb from './Thumb';
import NoImage from '../images/no-image.svg';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import Button from './Button';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

class Home extends Component {
  state = {
    movies: initialState,
    searchTerm: '',
    loading: false,
    isLoadingMore: false,
    error: false
  };
  fetchMovies = async (page, searchTerm = '') => {
    try {
      this.setState({ error: false, loading: true });

      const movies = await API.fetchMovies(searchTerm, page);

      this.setState(prev => ({
        movies: {
          ...movies,
          results:
            page > 1
              ? [...prev.movies.results, ...movies.results]
              : [...movies.results]
        },
        loading: false
      }));
    } catch (error) {
      this.setState({ error: true });
    }
  };

  handleSearch = searchTerm => {
    this.setState({ movies: initialState, searchTerm }, () =>
      this.fetchMovies(1, this.state.searchTerm)
    );
  };

  handleMore = () => {
    this.fetchMovies(this.state.movies.page + 1, this.state.searchTerm);
  };

  componentDidMount() {
    this.fetchMovies(1);
  }
  render() {
    const { searchTerm, movies, loading, error } = this.state;
    return (
      <>
        {!searchTerm && movies.results[0] ? (
          <HeroImage
            image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${
              movies.results[0].backdrop_path
            }`}
            title={movies.results[0].original_title}
            text={movies.results[0].overview}
          />
        ) : null}
        <SearchBar setSearchTerm={this.handleSearch} />
        <Grid header={searchTerm ? 'Search results' : 'Popular Movies'}>
          {movies.results.map(movie => (
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
        {loading && <Spinner />}
        {movies.page < movies.total_pages && !loading && (
          <Button text="Load More" callback={() => this.handleMore(true)} />
        )}
      </>
    );
  }
}

export default Home;
