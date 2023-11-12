import SearchForm from '../SearchForm/SearchForm';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import moviesApi from '../../utils/MoviesApi';
import Preloader from '../Preloader/Preloader';

export default function Movies({ name, onAddMovie, savedMovies }) {
  const [rawMovies, setRawMovies] = useState(
    JSON.parse(localStorage.getItem('films')) || []
  );
  const [filteredMovies, setFilteredMovies] = useState(
    JSON.parse(localStorage.getItem('filtered')) || []
  );
  const [isShort, setIsShort] = useState(
    JSON.parse(localStorage.getItem('isShort')) || false
  );
  const [searchString, setSearchString] = useState(
    localStorage.getItem('searchString') || ''
  );
  const [serverError, setServerError] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [isFirstEntrance, setIsFirstEntrance] = useState(false);

  useEffect(() => {
    if (rawMovies.length === 0) {
      setIsFirstEntrance(true);
    } else {
      setIsFirstEntrance(false);
    }
  }, [rawMovies.length]);

  const filter = useCallback((movies, searchString, isShort) => {
    let filtered = movies.filter((movie) => {
      return isShort
        ? (movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchString.toLowerCase())) &&
            movie.duration <= 40
        : movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchString.toLowerCase());
    });
    localStorage.setItem('filtered', JSON.stringify(filtered));
    setFilteredMovies(filtered);
  }, []);

  function searchMovies(searchString, isShort) {
    if (rawMovies.length === 0) {
      setIsPreloader(true);
      moviesApi
        .getMovies()
        .then((res) => {
          localStorage.setItem('films', JSON.stringify(res));
          setRawMovies(res);
          filter(res, searchString, isShort);
        })
        .catch((err) => {
          setServerError(true);
          console.error(`Ошибка при поиске фильмов ${err}`);
        })
        .finally(() => {
          setIsPreloader(false);
        });
    } else {
      setServerError(false);
      filter(rawMovies, searchString, isShort);
    }
  }

  function check(evt) {
    const value = evt.target.checked;
    setIsShort(value);
    localStorage.setItem('isShort', value);
    searchMovies(searchString, value);
  }

  return (
    <section className='movies'>
      <SearchForm
        check={check}
        isShort={isShort}
        searchString={searchString}
        setSearchString={setSearchString}
        searchMovies={searchMovies}
        isFirstEntrance={isFirstEntrance}
      />
      {isPreloader ? (
        <Preloader />
      ) : (
        <MoviesCardList
          name={name}
          movies={filteredMovies}
          serverError={serverError}
          isFirstEntrance={isFirstEntrance}
          onAddMovie={onAddMovie}
          savedMovies={savedMovies}
        />
      )}
    </section>
  );
}
