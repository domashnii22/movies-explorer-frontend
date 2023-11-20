import { Link } from 'react-router-dom';
import '../Register/Register.css';
import useFormValidation from '../../utils/useFormValidation';
import { REG_EMAIL } from '../../utils/constants';

export default function Register({ handleRegister, isSend }) {
  const { values, errors, isValid, isInputValid, handleChange } =
    useFormValidation();

  function onRegister(evt) {
    evt.preventDefault();
    handleRegister(values.name, values.password, values.email);
  }

  return (
    <section className='register'>
      <form noValidate className='register__form' onSubmit={onRegister}>
        <h2 className='register__hi'>Добро пожаловать!</h2>
        <label htmlFor='name' className='register__label'>
          Имя
        </label>
        <input
          required
          name='name'
          placeholder='Имя'
          id='name'
          type='text'
          value={values.name ? values.name : ''}
          minLength={2}
          maxLength={30}
          className={`register__input ${
            isInputValid.name === undefined || isInputValid.name
              ? ''
              : 'register__input_invalid'
          }`}
          onChange={handleChange}
        ></input>
        <span className='register__error'>{errors.name}</span>
        <label htmlFor='email' className='register__label'>
          E-mail
        </label>
        <input
          required
          pattern={REG_EMAIL}
          name='email'
          placeholder='Email'
          id='email'
          type='email'
          value={values.email ? values.email : ' '}
          minLength={2}
          maxLength={30}
          className={`register__input ${
            isInputValid.email === undefined || isInputValid.email
              ? ''
              : 'register__input_invalid'
          }`}
          onChange={handleChange}
        ></input>
        <span className='register__error'>{errors.email}</span>
        <label htmlFor='password' className='register__label'>
          Пароль
        </label>
        <input
          required
          name='password'
          placeholder='Пароль'
          id='password'
          type='password'
          value={values.password ? values.password : ''}
          minLength={8}
          maxLength={20}
          className={`register__input ${
            isInputValid.password === undefined || isInputValid.password
              ? ''
              : 'register__input_invalid'
          }`}
          onChange={handleChange}
        ></input>
        <span className='register__error'>{errors.password}</span>
        <button
          type='submit'
          className={`register__button ${
            isValid ? '' : 'register__button_invalid'
          }`}
          disabled={!isValid || isSend}
        >
          Зарегистрироваться
        </button>
      </form>
      <div className='register__container'>
        <p className='register__question'>Уже зарегистрированы?</p>
        <Link to={'/sign-in'} className='register__link'>
          Войти
        </Link>
      </div>
    </section>
  );
}
