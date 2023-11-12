import { Link } from 'react-router-dom';
import '../Profile/Profile.css';
import { useContext, useEffect, useState } from 'react';
import useFormValidation from '../../utils/useFormValidation';
import CurrentUserContext from '../../context/CurrentUserContext';

export default function Profile({ onUpdateUser, setLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  const {
    values,
    errors,
    isValid,
    isInputValid,
    handleChange,
    setValue,
    setIsValid,
  } = useFormValidation();
  const [isMakeInputsActive, setIsMakeInputsActive] = useState(true);
  const [isChangeButton, setIsChangeButton] = useState(false);

  useEffect(() => {
    setValue('name', currentUser.name);
    setValue('email', currentUser.email);
  }, [currentUser, setValue]);

  useEffect(() => {
    if (currentUser.email !== values.email) {
      setIsValid(true);
    } else if (currentUser.name !== values.name) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    currentUser.name,
    values.name,
    currentUser.email,
    values.email,
    setIsValid,
  ]);

  const handleChangeProfile = () => {
    setIsMakeInputsActive(!isMakeInputsActive);
    setIsChangeButton(true);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({ name: values.name, email: values.email });
    setIsChangeButton(false);
    setIsMakeInputsActive(true);
  }

  function onSignOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  return (
    <section className='profile'>
      <p className='profile__hi'>
        Привет, {currentUser.name ? currentUser.name : '#'}
      </p>
      <form noValidate className='profile__form' onSubmit={handleSubmit}>
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
            placeholder={currentUser.name}
            value={values.name ? values.name : ''}
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
            placeholder={currentUser.email}
            value={values.email ? values.email : ''}
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
            <Link to={'/'} className='profile__unlogin' onClick={onSignOut}>
              Выйти из аккаунта
            </Link>
          </>
        )}
      </form>
    </section>
  );
}
