import '../AboutMe/AboutMe.css';
import student from '../../images/student.jpg';

export default function AboutMe() {
  return (
    <section className='student' id='student'>
      <h2 className='student__title'>Студент</h2>
      <div className='student__container'>
        <div className='student__info'>
          <p className='student__name'>Алексей</p>
          <p className='student__age'>Фронтенд-разработчик, 28 лет</p>
          <p className='student__story'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            target='_blank'
            href={'https://github.com/domashnii22'}
            className='student__link'
            rel='noreferrer'
          >
            Github
          </a>
        </div>
        <img alt='Фото студента' src={student} className='student__image'></img>
      </div>
    </section>
  );
}
