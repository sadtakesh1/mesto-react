import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({ card, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = ( 
    `card__like-button ${isLiked && 'card__like-button_active'}` 
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <article className="card">
      {isOwn && <button className="card__delete-button" onClick={handleDeleteClick} type="button" />}
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="card__image"
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" onClick={handleLikeClick} className={cardLikeButtonClassName} />
          <span className="card__likes-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
