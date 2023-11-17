import '../PopupWithForm/PopupWithForm.css';

export default function PopupWithForm({ isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__contain' onClick={(evt) => evt.stopPropagation()}>
        <button
          aria-label='Кнопка закрытия попапа'
          type='button'
          className='popup__close-button'
          onClick={onClose}
        />
        <h2 className='popup__title'>Вы уверены?</h2>
        <form noValidate className='popup__form' onSubmit={onSubmit}>
          <button type='submit' className={'popup__save-button'}>
            Да
          </button>
        </form>
      </div>
    </div>
  );
}
