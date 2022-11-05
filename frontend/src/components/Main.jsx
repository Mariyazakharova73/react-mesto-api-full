import avatar from './../images/profile-avatar.jpg';
import React from 'react';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardContext } from '../contexts/CardContext.js';

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onImageClick,
  onCardLike,
  cards,
  onTrashClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar || avatar} alt="Аватар" />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__info-name">{currentUser.name || 'Мария Захарова'}</h1>
            <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          </div>
          <p className="profile__info-job">{currentUser.about || 'Студент'}</p>
        </div>
        <button className="profile__add-buttton" type="button" onClick={onAddPlace} />
      </section>
      <section className="gallery" aria-label="Галерея">
        <ul className="gallery__cards">
          {cards.map((item) => (
            <CardContext.Provider value={item} key={item._id}>
              <Card
                onImageClick={onImageClick}
                onCardLike={onCardLike}
                onTrashClick={onTrashClick}
              />
            </CardContext.Provider>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
