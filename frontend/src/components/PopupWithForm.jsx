function PopupWithForm({ isOpen, onClose, name, title, buttonText, children, onSubmit, isValid }) {
  return (
    <div className={`popup popup_place_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <div className="popup__form-content">
          <h2 className="popup__form-heading">{title}</h2>
          <form onSubmit={onSubmit} className="popup__form form" name={name} noValidate>
            {children}
            <button
              disabled={!isValid}
              className={
                isValid ? `popup__form-button` : `popup__form-button popup__form-button_inactive`
              }
              type="submit"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
