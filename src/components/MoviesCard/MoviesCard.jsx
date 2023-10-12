import '../MoviesCard/MoviesCard.css';
import movie from '../../images/movie.png';
import { useState } from 'react';

export default function MoviesCard({ name, id }) {
  const [isShowButton, setIsShowButton] = useState(false);

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
      {
        {
          movies: (
            <>
              {isShowButton && (
                <button
                  type='button'
                  className={
                    id === 'saved'
                      ? 'movie__button movie__button_type_saved'
                      : 'movie__button movie__button_type_save'
                  }
                >
                  {id === 'saved' ? '' : 'Сохранить'}
                </button>
              )}
            </>
          ),
          saved: (
            <>
              {isShowButton && (
                <button
                  type='button'
                  className='movie__button movie__button_type_delete'
                ></button>
              )}
            </>
          ),
        }[name]
      }

      <img src={movie} alt='Постер фильма' className='movie__image'></img>
      <div className='movie__container'>
        <p className='movie__name'>Бег это свобода</p>
        <p className='movie__duration'>1ч 17м</p>
      </div>
    </article>
  );
}
