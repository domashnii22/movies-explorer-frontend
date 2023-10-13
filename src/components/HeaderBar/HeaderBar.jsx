import { Link } from 'react-router-dom';
import '../HeaderBar/HeaderBar.css';

export default function HeaderBar() {
  return (
    <>
      <ul className='header__bar'>
        <Link to={'/sign-up'} className='header__item-register'>
          Регистрация
        </Link>
        <Link to={'/sign-in'} className='header__item-login'>
          Войти
        </Link>
      </ul>
    </>
  );
}
