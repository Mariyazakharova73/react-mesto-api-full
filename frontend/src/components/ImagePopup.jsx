function ImagePopup({ card, onClose }) {
  //card = selectedCard
  return (
    <div className={`popup popup_place_click-image ${card.link ? 'popup_opened' : ''}`}>
      <div className="popup__content">
        <button className="popup__close" type="button" onClick={onClose} />
        <figure className="popup__image-container">
          <img className="popup__image" src={card.link} alt={`${card.name}.`} />
          <figcaption className="popup__image-title">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
