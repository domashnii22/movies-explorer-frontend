import ButtonAdd from '../ButtonAdd/ButtonAdd';
import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';
import { useResize } from '../../utils/useResize';
import {
  NUMBER_CARDS_DESKTOP,
  NUMBER_CARDS_TABLE_MOBILE,
} from '../../utils/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function MoviesCardList({
  name,
  movies,
  serverError,
  isFirstEntrance,
  onAddMovie,
  savedMovies,
  onDeleteMovie,
}) {
  const [countOfMovies, setCountOfMovies] = useState(0);
  const { isScreenForFirstPosition, isScreenForSecondPosition } = useResize();
  const pathname = useLocation();

  useEffect(() => {
    setNumbersOfMovies();
    // eslint-disable-next-line
  }, []);

  function setNumbersOfMovies() {
    if (isScreenForFirstPosition) {
      setCountOfMovies(12);
    } else if (isScreenForSecondPosition) {
      setCountOfMovies(8);
    } else {
      setCountOfMovies(5);
    }
  }

  function setNumbersOfPlusMovies() {
    if (isScreenForFirstPosition) {
      setCountOfMovies(countOfMovies + NUMBER_CARDS_DESKTOP);
    } else if (isScreenForSecondPosition) {
      setCountOfMovies(countOfMovies + NUMBER_CARDS_DESKTOP);
    } else {
      setCountOfMovies(countOfMovies + NUMBER_CARDS_TABLE_MOBILE);
    }
  }

  return (
    <>
      {
        {
          movies: isFirstEntrance
            ? serverError && (
                <p className='movies__info'>
                  Во время запроса произошла ошибка. Возможно, проблема с
                  соединением или сервер недоступен. Подождите немного и
                  попробуйте ещё раз
                </p>
              )
            : movies.length === 0 && (
                <p className='movies__info'>Ничего не найдено</p>
              ),
          saved: movies.length === 0 && (
            <p className='movies__info'>Ничего не найдено</p>
          ),
        }[name]
      }
      <ul
        className={
          movies.length === 0 ? 'movies__list_invisible' : 'movies__list'
        }
      >
        {pathname.pathname === '/movies'
          ? movies.slice(0, countOfMovies).map((data) => {
              return (
                <li className='movies__list-item' key={data.id}>
                  <MoviesCard
                    movie={data}
                    onAddMovie={onAddMovie}
                    savedMovies={savedMovies}
                  />
                </li>
              );
            })
          : movies.map((data) => {
              return (
                <li className='movies__list-item' key={data._id}>
                  <MoviesCard movie={data} onDeleteMovie={onDeleteMovie} />
                </li>
              );
            })}
      </ul>
      {
        {
          movies:
            movies.length > 12 && movies.length >= countOfMovies ? (
              <ButtonAdd
                setNumbersOfPlusMovies={setNumbersOfPlusMovies}
              ></ButtonAdd>
            ) : (
              <></>
            ),
        }[name]
      }
    </>
  );
}
