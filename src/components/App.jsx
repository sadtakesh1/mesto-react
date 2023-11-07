import React, { useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import ImagePopup from "./ImagePopup.jsx";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function onEditAvatar() {
    setEditAvatarPopupOpen(true);
  }

  function onEditProfile() {
    setEditProfilePopupOpen(true);
  }

  function onAddPlace() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopup() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onAddPlace={onAddPlace}
          onEditProfile={onEditProfile}
          onEditAvatar={onEditAvatar}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="profile-edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          submitButtontext="Сохранить"
          onClose={closeAllPopup}
        >
          <label htmlFor="userName">
            <input
              id="userName"
              className="popup__input popup__input_user-name"
              name="userName"
              type="text"
              minLength={2}
              maxLength={40}
              required=""
              placeholder="Введите имя"
            />
            <p className="popup__error userName-error" />
          </label>
          <label htmlFor="aboutUser">
            <input
              id="aboutUser"
              className="popup__input popup__input_about-user"
              name="aboutUser"
              type="text"
              minLength={2}
              maxLength={200}
              required=""
              placeholder="О себе"
            />
            <p className="popup__error aboutUser-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="add-card"
          title="Добавить карточку"
          isOpen={isAddPlacePopupOpen}
          submitButtontext="Создать"
          onClose={closeAllPopup}
        >
          <label htmlFor="userName">
            <input
              id="userName"
              className="popup__input popup__input_user-name"
              name="userName"
              type="text"
              minLength={2}
              maxLength={40}
              required=""
              placeholder="Введите имя"
            />
            <p className="popup__error userName-error" />
          </label>
          <label htmlFor="aboutUser">
            <input
              id="aboutUser"
              className="popup__input popup__input_about-user"
              name="aboutUser"
              type="text"
              minLength={2}
              maxLength={200}
              required=""
              placeholder="О себе"
            />
            <p className="popup__error aboutUser-error" />
          </label>
        </PopupWithForm>
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopup}
        >
          <label htmlFor="placeAvatar">
            <input
              id="placeAvatar"
              className="popup__input"
              name="link"
              type="url"
              placeholder="Ссылка на картинку"
              required=""
            />
            <p className="popup__error placeAvatar-error" />
          </label>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopup} />
      </div>
    </>
  );
}

export default App;
