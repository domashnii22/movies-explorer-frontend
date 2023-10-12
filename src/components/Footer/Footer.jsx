import '../Footer/Footer.css';

export default function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__project'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__container'>
        <p className='footer__copyright'>&copy; 2023</p>
        <ul className='footer__list'>
          <li className='footer__list-item'>
            <a
              target='_blank'
              href={'https://practicum.yandex.ru/'}
              className='footer__link'
              rel='noreferrer'
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className='footer__list-item'>
            <a
              target='_blank'
              href={'https://github.com/domashnii22'}
              className='footer__link'
              rel='noreferrer'
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
