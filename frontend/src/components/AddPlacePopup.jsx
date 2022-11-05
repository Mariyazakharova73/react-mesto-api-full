import React from 'react';
import PopupWithForm from './PopupWithForm';
import { useFormAndValidation } from '../hooks/useFormAndValidation.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace, loadingData }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormAndValidation({});

  function handleSubmit(evt) {
    evt.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace(values.name, values.link);
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
      name="add-button"
      title="Новое место"
      buttonText={loadingData ? 'Создание...' : 'Создать'}
    >
      <input
        value={values.name || ''}
        onChange={handleChange}
        id="title-input"
        className={`popup__form-input
          ${errors.name ? 'popup__form-input_type_error' : ''}`}
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        required
      />
      <span
        className={`title-input-error popup__input-error ${
          errors.name ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.name}
      </span>

      <input
        value={values.link || ''}
        onChange={handleChange}
        id="link-input"
        className={`popup__form-input
        ${errors.link ? 'popup__form-input_type_error' : ''}`}
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
      />
      <span
        className={`link-input-error popup__input-error ${
          errors.link ? 'popup__input-error_active' : ''
        }`}
      >
        {errors.link}
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
