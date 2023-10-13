import '../AboutProject/AboutProject.css';

export default function AboutProject() {
  return (
    <section className='project' id='project'>
      <h2 className='project__title'>О проекте</h2>
      <ul className='project__list'>
        <li className='project__list-item'>
          <p className='project__thesis'>Дипломный проект включал 5 этапов</p>
          <p className='project__annotation'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className='project__list-item'>
          <p className='project__thesis'>На выполнение диплома ушло 5 недель</p>
          <p className='project__annotation'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <ul className='project__band'>
        <li className='project__band-item'>
          <div className='project__period project__period_count_one'>
            1 неделя
          </div>
          <p className='project__work'>Back-end</p>
        </li>
        <li className='project__band-item'>
          <div className='project__period project__period_count_four'>
            4 недели
          </div>
          <p className='project__work'>Front-end</p>
        </li>
      </ul>
    </section>
  );
}
