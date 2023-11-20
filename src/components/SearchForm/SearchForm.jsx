import { useEffect, useState } from 'react';
import useFormValidation from '../../utils/useFormValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';
import { useLocation } from 'react-router-dom';

export default function SearchForm({
  check,
  isShort,
  searchString,
  setSearchString,
  searchMovies,
  isFirstEntrance,
  searchSavedMovies,
}) {
  const [isError, setIsError] = useState(true);
  const { values, handleChange, reset } = useFormValidation();
  const pathname = useLocation();

  useEffect(() => {
    if (
      pathname.pathname === '/movies' &&
      localStorage.getItem('searchString')
    ) {
      reset({ search: searchString });
    }
    // eslint-disable-next-line
  }, []);

  function search(evt) {
    if (!values.search) {
      evt.preventDefault();
      setIsError(false);
    } else if (pathname.pathname === '/movies') {
      evt.preventDefault();
      const value = values.search;
      setSearchString(value);
      localStorage.setItem('searchString', value);
      setIsError(true);
      searchMovies(value, isShort);
    } else {
      evt.preventDefault();
      const value = values.search;
      setSearchString(value);
      // localStorage.setItem('searchString', value);
      setIsError(true);
      searchSavedMovies(value, isShort);
    }
  }

  return (
    <form noValidate name='search' className='movies__form' onSubmit={search}>
      <div className='movies__form-container'>
        <div className='movies__form-box'>
          <input
            name='search'
            required
            type='text'
            placeholder='Фильм'
            className='movies__input'
            minLength={2}
            maxLength={100}
            onChange={handleChange}
            value={values.search || ''}
          ></input>
          <button type='submit' className='movies__btn'></button>
        </div>
        {!isError ? (
          <span className='movies__error'>Нужно ввести ключевое слово</span>
        ) : (
          ''
        )}
      </div>

      <FilterCheckbox
        check={check}
        isShort={isShort}
        isFirstEntrance={isFirstEntrance}
      />
    </form>
  );
}
