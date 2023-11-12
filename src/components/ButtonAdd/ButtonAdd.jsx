import '../ButtonAdd/ButtonAdd.css';

export default function ButtonAdd({ setNumbersOfPlusMovies }) {
  return (
    <button
      onClick={setNumbersOfPlusMovies}
      type='button'
      className={'movies__button-add movies__button-add_inactive'}
    >
      Ещё
    </button>
  );
}
