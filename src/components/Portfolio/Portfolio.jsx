import '../Portfolio/Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            target='_blank'
            href={'https://github.com/domashnii22/how-to-learn'}
            rel='noreferrer'
          >
            <p className='portfolio__site'>Статичный сайт</p>
            <p className='portfolio__arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link'
            target='_blank'
            href={'https://github.com/domashnii22/russian-travel'}
            rel='noreferrer'
          >
            <p className='portfolio__site'>Адаптивный сайт</p>
            <p className='portfolio__arrow'>↗</p>
          </a>
        </li>
        <li className='portfolio__list-item'>
          <a
            className='portfolio__link portfolio__link_last'
            target='_blank'
            href={'https://github.com/domashnii22/react-mesto-api-full-gha'}
            rel='noreferrer'
          >
            <p className='portfolio__site'>Одностраничное приложение</p>
            <p className='portfolio__arrow'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
