function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_type_full-image ${card ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={onClose}
        />
        <img
          className="popup__image"
          src={`${card?.link}`}
          alt={`${card?.name}`}
        />
        <h2 className="popup__title popup__title_image" />
      </div>
    </div>
  );
}

export default ImagePopup;
