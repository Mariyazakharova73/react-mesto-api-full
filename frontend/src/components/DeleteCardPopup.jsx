import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup({ isOpen, onClose, cardToDelete, onCardDelete, loadingData }) {
  function handleSubmit(evt) {
    evt.preventDefault();
    onCardDelete(cardToDelete); //{} cardToDelete изменилась при клике на корзину
    onClose();
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      name="delete-button"
      title="Вы уверены?"
      onClose={onClose}
      isOpen={isOpen}
      onCardDelete={onCardDelete}
      isValid={true}
      buttonText={loadingData ? 'Удаление...' : 'Да'}
    ></PopupWithForm>
  );
}

export default DeleteCardPopup;
