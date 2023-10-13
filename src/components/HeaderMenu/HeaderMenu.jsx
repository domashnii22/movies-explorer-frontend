import { Link, NavLink } from 'react-router-dom';
import '../HeaderMenu/HeaderMenu.css';
import Burger from '../Burger/Burger';
import { useResize } from '../../utils/useResize';
import { useState } from 'react';

export default function HeaderMenu() {
  const { isScreenForBurger } = useResize();
  const [isShowBurgerMenu, setIsShowBurgerMenu] = useState(false);
  function handleBurgerClick() {
    setIsShowBurgerMenu(!isShowBurgerMenu);
  }

  return isScreenForBurger ? (
    <>
      <nav className='header__nav'>
        <NavLink
          to={'/movies'}
          className={({ isActive }) =>
            `header__nav-item ${isActive ? 'header__nav-item_active' : ''}`
          }
        >
          Фильмы
        </NavLink>
        <NavLink
          to={'/saved-movies'}
          className={({ isActive }) =>
            `header__nav-item ${isActive ? 'header__nav-item_active' : ''}`
          }
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link to={'/profile'} className='header__link'>
        Аккаунт
      </Link>
    </>
  ) : (
    <>
      <Burger
        onBurgerClick={handleBurgerClick}
        active={isShowBurgerMenu}
        setActive={setIsShowBurgerMenu}
      />
      <div
        onClick={() => setIsShowBurgerMenu(false)}
        className={
          isShowBurgerMenu
            ? 'header__menu'
            : 'header__menu header__menu_inactive'
        }
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className={
            isShowBurgerMenu
              ? 'header__nav header__nav_adaptive header__nav_adaptive_active'
              : 'header__nav header__nav_adaptive header__nav_adaptive_inactive'
          }
        >
          <NavLink
            onClick={() => setIsShowBurgerMenu(false)}
            to={'/'}
            className={({ isActive }) =>
              `header__nav-item ${isActive ? 'header__nav-item_active' : ''}`
            }
          >
            Главная
          </NavLink>
          <NavLink
            onClick={() => setIsShowBurgerMenu(false)}
            to={'/movies'}
            className={({ isActive }) =>
              `header__nav-item ${isActive ? 'header__nav-item_active' : ''}`
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            onClick={() => setIsShowBurgerMenu(false)}
            to={'/saved-movies'}
            className={({ isActive }) =>
              `header__nav-item ${isActive ? 'header__nav-item_active' : ''}`
            }
          >
            Сохранённые фильмы
          </NavLink>
          <Link
            onClick={() => setIsShowBurgerMenu(false)}
            to={'/profile'}
            className='header__link'
          >
            Аккаунт
          </Link>
        </nav>
      </div>
    </>
  );
}
