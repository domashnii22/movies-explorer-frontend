import '../InfoTooltip/InfoTooltip.css';

export default function InfoTooltip({ isSuccessful, isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
      <div
        className='popup__container'
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          aria-label='Кнопка закрытия попапа'
          type='button'
          className='popup__close-button'
          onClick={onClose}
        />
        <div
          className={`popup__image-sign ${
            isSuccessful ? 'popup__image-sign_invalid' : ''
          }`}
        />
        <h2 className='popup__title popup__title_type_result'>
          {isSuccessful
            ? 'Вы успешно зарегистрировались!'
            : 'Что-то пошло не так! Попробуйте ещё раз.'}
        </h2>
      </div>
    </div>
  );
}
