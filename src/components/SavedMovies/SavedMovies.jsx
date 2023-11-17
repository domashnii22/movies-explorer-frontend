import SearchForm from '../SearchForm/SearchForm';
import '../SavedMovies/SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';

export default function SavedMovies({ name, savedMovies, onDeleteMovie }) {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShort, setIsShort] = useState(false);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (onDeleteMovie) {
    }
    setFilteredMovies(savedMovies);
    // eslint-disable-next-line
  }, [savedMovies]);

  const filter = useCallback((movies, searchString, isShort) => {
    let filtered = movies.filter((movie) => {
      return isShort
        ? (movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchString.toLowerCase())) &&
            movie.duration <= 40
        : movie.nameRU.toLowerCase().includes(searchString.toLowerCase()) ||
            movie.nameEN.toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredMovies(filtered);
  }, []);

  function searchSavedMovies(searchString, isShort) {
    if (filteredMovies.length === 0) {
      // setFilteredMovies(savedMovies);
      filter(savedMovies, searchString, isShort);
    } else {
      filter(savedMovies, searchString, isShort);
    }
  }

  function check(evt) {
    const value = evt.target.checked;
    setIsShort(value);
    searchSavedMovies(searchString, value);
  }

  return (
    <section className='movies'>
      <SearchForm
        check={check}
        isShort={isShort}
        searchString={searchString}
        setSearchString={setSearchString}
        searchSavedMovies={searchSavedMovies}
      />
      <MoviesCardList
        movies={filteredMovies}
        onDeleteMovie={onDeleteMovie}
        savedMovies={savedMovies}
        name={name}
      />
    </section>
  );
}
