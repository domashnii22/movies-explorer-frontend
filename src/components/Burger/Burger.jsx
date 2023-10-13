import '../Burger/Burger.css';

export default function Burger({ onBurgerClick, active }) {
  return (
    <>
      <div
        className={
          active
            ? 'header__burger header__burger_fixed header__burger_active'
            : 'header__burger'
        }
        onClick={onBurgerClick}
      >
        <span
          className={
            active
              ? 'header__span header__span_active'
              : 'header__span header__span_inactive'
          }
        ></span>
      </div>
    </>
  );
}
