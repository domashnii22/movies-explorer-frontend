import MoviesCard from '../MoviesCard/MoviesCard';
import '../MoviesCardList/MoviesCardList.css';

export default function MoviesCardList({ name }) {
  return (
    <ul className='movies__list'>
      {
        {
          movies: (
            <>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} id='saved' />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
            </>
          ),
          saved: (
            <>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
              <li className='movies__list-item'>
                <MoviesCard name={name} />
              </li>
            </>
          ),
        }[name]
      }
    </ul>
  );
}
