import '../Preloader/Preloader.css';

export default function Preloader({ name }) {
  return (
    <button
      type='button'
      className={
        name === 'movies'
          ? 'movies__preloader'
          : 'movies__preloader movies__preloader_inactive'
      }
    >
      Ещё
    </button>
  );
}
