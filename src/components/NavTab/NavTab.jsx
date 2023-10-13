import '../NavTab/NavTab.css';

export default function NavTab() {
  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__item'>
          <a href='#project' className='navigation__link'>
            О проекте
          </a>
        </li>
        <li className='navigation__item'>
          <a href='#techs' className='navigation__link'>
            Технологии
          </a>
        </li>
        <li className='navigation__item'>
          <a href='#student' className='navigation__link'>
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}
