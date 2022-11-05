import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, loadingData }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar(values.link);
  }

  React.useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  return (
    <PopupWithForm
      isValid={isValid}
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name="avatar"
      title="Обновить аватар"
      buttonText={loadingData ? 'Сохранение...' : 'Сохранить'}
    >
      <input
        value={values.link || ''}
        onChange={handleChange}
        id="link-input-avatar"
        className={`popup__form-input ${errors.link ? 'popup__form-input_type_error' : ''}`}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        className={`link-input-avatar-error popup__input-error ${
          errors.link ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.link}
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
