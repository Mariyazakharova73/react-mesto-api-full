import React from 'react';
import success from '../images/success.png';
import fail from '../images/fail.png';

function InfoTooltip({ popupText, isOpen, onClose, loggedIn }) {
  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <div className="popup__form-content">
          <div className="popup__content-wrapper">
            <img
              className="popup__registration-image"
              src={loggedIn ? success : fail}
              alt="Информационный попап"
            />
            <h2 className="popup__form-heading">{popupText}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;
