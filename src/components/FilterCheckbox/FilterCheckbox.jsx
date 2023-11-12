import '../FilterCheckbox/FilterCheckbox.css';

export default function FilterCheckbox({ check, isShort, isFirstEntrance }) {
  return (
    <>
      <div className='movies__checkbox-container'>
        <input
          type='checkbox'
          className='movies__checkbox'
          id='switch'
          onChange={check}
          checked={isShort}
          disabled={isFirstEntrance ? true : false}
        />
        <label className='movies__label' htmlFor='switch'>
          Короткометражки
        </label>
      </div>
    </>
  );
}
