import '../PopupWithForm/PopupWithForm.css';

export default function PopupWithForm({ isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`} onClick={onClose}>
      <div className='popup__contain' onClick={(evt) => evt.stopPropagation()}>
        <button
          aria-label='Кнопка закрытия попапа'
          type='button'
          className='popup__close-button'
          onClick={onClose}
        />
        <h2 className='popup__title'>Вы уверены?</h2>
        <form
          noValidate
          className='popup__form'
          onSubmit={onSubmit}
          onClick={onClose}
        >
          <button
            type='submit'
            className={'popup__save-button'}
            onClick={onClose}
          >
            Да
          </button>
        </form>
      </div>
    </div>
  );
}
