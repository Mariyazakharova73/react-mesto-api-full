import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, loadingData }) {
  const { values, handleChange, errors, isValid, setValues } = useFormAndValidation({});

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues(currentUser);
  }, [currentUser, isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser(values.name, values.about);
  }

  return (
    <PopupWithForm
      isValid={isValid}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name="edit-button"
      title="Редактировать профиль"
      buttonText={loadingData ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        value={values.name || ''}
        onChange={handleChange}
        id="name-input"
        className={`popup__form-input ${errors.name ? 'popup__form-input_type_error' : ''}`}
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        required
      />
      <span
        className={`name-input-error popup__input-error ${
          errors.name ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.name}
      </span>

      <input
        value={values.about || ''}
        onChange={handleChange}
        id="job-input"
        className={`popup__form-input ${errors.link ? 'popup__form-input_type_error' : ''}`}
        type="text"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        required
      />
      <span
        className={`job-input-error popup__input-error ${
          errors.about ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.about}
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
