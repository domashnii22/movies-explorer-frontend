import '../FilterCheckbox/FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <>
      <div className='movies__checkbox-container'>
        <input type='checkbox' className='movies__checkbox' id='switch' />
        <label className='movies__label' htmlFor='switch'>
          Короткометражки
        </label>
      </div>
    </>
  );
}
