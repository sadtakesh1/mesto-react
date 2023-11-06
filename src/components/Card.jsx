function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <article className="card">
      <button className="card__delete-button" type="button" />
      <img
        onClick={handleClick}
        src={card.link}
        alt={card.name}
        className="card__image"
      />
      <div className="card__info">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-container">
          <button type="button" className="card__like-button" />
          <span className="card__likes-counter">{card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}

export default Card;
