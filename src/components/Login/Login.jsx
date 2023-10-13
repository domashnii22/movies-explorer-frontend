import { Link } from 'react-router-dom';
import '../Login/Login.css';
import useFormValidation from '../../utils/useFormValidation';

export default function Login() {
  const { errors, isValid, isInputValid, handleChange } = useFormValidation();
  return (
    <section className='login'>
      <form className='login__form'>
        <h2 className='login__hi'>Рады видеть!</h2>
        <label htmlFor='email' className='login__label'>
          E-mail
        </label>
        <input
          required
          name='email'
          id='email'
          type='email'
          defaultValue={'pochta@yandex.ru'}
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
          id='password'
          type='password'
          defaultValue={'pochta@yandex.ru'}
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
