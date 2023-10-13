import { Link, useNavigate } from 'react-router-dom';
import '../NotFound/NotFound.css';

export default function NotFound() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <section className='not-found'>
      <h2 className='not-found__title'>404</h2>
      <p className='not-found__text'>Страница не найдена</p>
      <Link onClick={goBack} to={'#'} className='not-found__link'>
        Назад
      </Link>
    </section>
  );
}
