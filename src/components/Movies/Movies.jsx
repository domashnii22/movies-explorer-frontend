import SearchForm from '../SearchForm/SearchForm';
import '../Movies/Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

export default function Movies({ name }) {
  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList name={name} />
      <Preloader name={name} />
    </section>
  );
}
