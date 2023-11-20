import { Link } from 'react-router-dom';
import '../Login/Login.css';
import useFormValidation from '../../utils/useFormValidation';
import { REG_EMAIL } from '../../utils/constants';

export default function Login({ handleLogin, isSend }) {
  const { values, errors, isValid, isInputValid, handleChange } =
    useFormValidation();

  function onLogin(evt) {
    evt.preventDefault();
    handleLogin(values.password, values.email);
  }

  return (
    <section className='login'>
      <form noValidate className='login__form' onSubmit={onLogin}>
        <h2 className='login__hi'>Рады видеть!</h2>
        <label htmlFor='email' className='login__label'>
          E-mail
        </label>
        <input
          required
          pattern={REG_EMAIL}
          name='email'
          placeholder='Email'
          id='email'
          type='email'
          value={values.email ? values.email : ''}
          minLength={2}
          maxLength={30}
          className={`login__input ${
            isInputValid.email === undefined || isInputValid.email
              ? ''
              : 'login__input_invalid'
          }`}
          onChange={handleChange}
        ></input>
        <span className='login__error'>{errors.email}</span>
        <label htmlFor='password' className='login__label'>
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
          className={`login__input ${
            isInputValid.password === undefined || isInputValid.password
              ? ''
              : 'login__input_invalid'
          }`}
          onChange={handleChange}
        ></input>
        <span className='login__error'>{errors.password}</span>
        <button
          type='submit'
          className={`login__button ${isValid ? '' : 'login__button_invalid'}`}
          disabled={!isValid || isSend}
        >
          Войти
        </button>
      </form>
      <div className='login__container'>
        <p className='login__question'>Ещё не зарегистрированы?</p>
        <Link to={'/sign-up'} className='login__link'>
          Регистрация
        </Link>
      </div>
    </section>
  );
}
