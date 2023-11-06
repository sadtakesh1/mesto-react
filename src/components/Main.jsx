import React, { useEffect, useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.jsx";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.log(error);
      });

    api
      .getDataCards()
      .then((data) => {
        setCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          className="profile__avatar-overlay"
          type="button"
          onClick={onEditAvatar}
        >
          <img className="profile__avatar" alt="#" src={userAvatar} />
        </button>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button
            className="profile__edit-button"
            type="button"
            onClick={onEditProfile}
          />
          <h2 className="profile__subtitle">{userDescription}</h2>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        />
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
