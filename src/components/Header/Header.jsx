import { Link } from 'react-router-dom';
import HeaderBar from '../HeaderBar/HeaderBar';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import '../Header/Header.css';

export default function Header({ name }) {
  return (
    <header className={name === 'entrance' ? 'header header_bottom' : 'header'}>
      <Link to={'/'} className='header__logo'></Link>
      {
        {
          auth: <HeaderMenu />,
          unauth: <HeaderBar />,
        }[name]
      }
    </header>
  );
}
