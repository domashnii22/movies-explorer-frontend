import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import '../SearchForm/SearchForm.css';

export default function SearchForm() {
  return (
    <form name='search' className='movies__form'>
      <div className='movies__form-container'>
        <input
          name='search'
          required
          type='text'
          placeholder='Фильм'
          className='movies__input'
          minLength={2}
          maxLength={100}
        ></input>
        <button type='submit' className='movies__btn'></button>
      </div>
      <FilterCheckbox />
    </form>
  );
}
