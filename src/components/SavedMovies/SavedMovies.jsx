import SearchForm from '../SearchForm/SearchForm';
import '../SavedMovies/SavedMovies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

export default function SavedMovies({ name }) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList name={name} />
      <Preloader name={name} />
    </section>
  );
}
