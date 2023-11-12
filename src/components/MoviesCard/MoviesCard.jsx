import { useLocation } from 'react-router-dom';
import '../MoviesCard/MoviesCard.css';
import { useEffect, useState } from 'react';

export default function MoviesCard({
  movie,
  onAddMovie,

  onDeleteMovie,
  savedMovies,
}) {
  const pathname = useLocation();
  const [click, setClick] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);

  useEffect(() => {
    if (pathname.pathname === '/movies') {
      setClick(savedMovies.some((item) => movie.id === item.movieId));
    }
  }, [movie.id, pathname.pathname, savedMovies]);

  function onCLick() {
    if (savedMovies.some((item) => movie.id === item.movieiD)) {
      setClick(true);
      onAddMovie(movie);
    } else {
      setClick(false);
      onAddMovie(movie);
    }
  }

  function handleMouseEnter() {
    setIsShowButton(true);
  }

  function handleMouseLeave() {
    setIsShowButton(false);
  }

  return (
    <article
      className='movie'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {pathname.pathname === '/movies' ? (
        <>
          {isShowButton &&
            (click ? (
              <button
                type='button'
                className={'movie__button movie__button_type_saved'}
              ></button>
            ) : (
              <button
                type='button'
                onClick={onCLick}
                className={'movie__button movie__button_type_save'}
              >
                Сохранить
              </button>
            ))}
          <a
            target='_blank'
            href={movie.trailerLink}
            className='movie__link'
            rel='noreferrer'
          >
            <img
              src={`https://api.nomoreparties.co/${movie.image.url}`}
              alt={`Постер к фильму ${movie.nameRU}`}
              className='movie__image'
            ></img>
          </a>
          <div className='movie__container'>
            <p className='movie__name'>{movie.nameRU}</p>
            <p className='movie__duration'>
              {Math.floor(movie.duration / 60)}ч{' '}
              {Math.floor(movie.duration % 60)}м
            </p>
          </div>
        </>
      ) : (
        <>
          {isShowButton && (
            <button
              type='button'
              className='movie__button movie__button_type_delete'
              onClick={() => onDeleteMovie(movie._id)}
            ></button>
          )}
          <a
            target='_blank'
            href={movie.trailer}
            className='movie__link'
            rel='noreferrer'
          >
            <img
              src={movie.image}
              alt={`Постер к фильму ${movie.nameRU}`}
              className='movie__image'
            ></img>
          </a>
          <div className='movie__container'>
            <p className='movie__name'>{movie.nameRU}</p>
            <p className='movie__duration'>
              {Math.floor(movie.duration / 60)}ч{' '}
              {Math.floor(movie.duration % 60)}м
            </p>
          </div>
        </>
      )}
    </article>
  );
}
