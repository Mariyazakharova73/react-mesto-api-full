import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';

function Card({ onImageClick, onCardLike, onTrashClick }) {
  const currentUser = React.useContext(CurrentUserContext);
  const card = React.useContext(CardContext);

  const isOwn = card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `gallery__button-delete ${
    isOwn ? '' : 'gallery__button-delete_hidden'
  }`;

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `button-like ${isLiked ? 'button-like_active' : ''}`;

  function handleImageClick() {
    onImageClick(card); //записываем данные при клике в selectedCard
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleTrashClick() {
    onTrashClick(card); //записываем данные при клике в cardToDelete
  }

  return (
    <li className="gallery__card">
      <button className={cardDeleteButtonClassName} type="button" onClick={handleTrashClick} />
      <img
        className="gallery__card-image"
        src={card.link}
        alt={`${card.name}.`}
        onClick={handleImageClick}
      />
      <div className="gallery__card-description">
        <h2 className="gallery__card-heading">{card.name}</h2>
        <div className="button-like__container">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick} />
          <p className="button-like__number">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
