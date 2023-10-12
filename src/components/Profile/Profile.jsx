import { Link } from 'react-router-dom';
import '../Profile/Profile.css';
import { useState } from 'react';
import useFormValidation from '../../utils/useFormValidation';

export default function Profile() {
  const { errors, isValid, isInputValid, handleChange } = useFormValidation();
  const [isMakeInputsActive, setIsMakeInputsActive] = useState(true);
  const [isChangeButton, setIsChangeButton] = useState(false);

  const handleChangeProfile = () => {
    setIsMakeInputsActive(!isMakeInputsActive);
    setIsChangeButton(true);
  };

  return (
    <section className='profile'>
      <p className='profile__hi'>Привет, Алексей!</p>
      <form noValidate className='profile__form'>
        <div className='profile__container'>
          <label className='profile__label' htmlFor='name'>
            Имя
          </label>
          <input
            required
            disabled={isMakeInputsActive}
            id='name'
            name='name'
            type='text'
            defaultValue={'Алексей'}
            minLength={2}
            maxLength={30}
            className={`profile__input ${
              isInputValid.name === undefined || isInputValid.name
                ? ''
                : 'profile__input_invalid'
            }`}
            onChange={handleChange}
          ></input>
        </div>
        <span className='profile__error'>{errors.name}</span>
        <div className='profile__container'>
          <label className='profile__label' htmlFor='name'>
            E-mail
          </label>
          <input
            required
            disabled={isMakeInputsActive}
            id='email'
            name='email'
            type='email'
            defaultValue={'pochta@yandex.ru'}
            minLength={2}
            maxLength={30}
            className={`profile__input ${
              isInputValid.email === undefined || isInputValid.email
                ? ''
                : 'profile__input_invalid'
            }`}
            onChange={handleChange}
          ></input>
        </div>
        <span className='profile__error'>{errors.email}</span>
        {isChangeButton ? (
          <button
            type='submit'
            className={`profile__button-save ${
              isValid ? '' : 'profile__button-save_invalid'
            }`}
          >
            Сохранить
          </button>
        ) : (
          <>
            <button
              type='button'
              className='profile__button'
              onClick={handleChangeProfile}
            >
              Редактировать
            </button>
            <Link to={'/sign-in'} className='profile__unlogin'>
              Выйти из аккаунта
            </Link>
          </>
        )}
      </form>
    </section>
  );
}
